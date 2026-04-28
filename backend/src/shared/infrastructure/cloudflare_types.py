"""
Cloudflare Workers Runtime — Python type stubs.

Cloudflare D1 bindings are JavaScript objects proxied into Python via Pyodide's
FFI. No official Python stubs exist (as of 2026). These Protocol classes mirror
the TypeScript D1 API surface so that static type checkers (Pyrefly, Pyright,
mypy) can validate code that uses D1 without any runtime overhead.

References:
  - https://developers.cloudflare.com/d1/worker-api/
  - https://developers.cloudflare.com/d1/worker-api/d1-database/
  - https://developers.cloudflare.com/d1/worker-api/prepared-statements/
  - https://developers.cloudflare.com/d1/worker-api/return-object/
"""

from typing import Any, Protocol


# ---------------------------------------------------------------------------
# D1 return shapes
# ---------------------------------------------------------------------------


class D1ResultMeta(Protocol):
    """Metadata returned inside every D1Result object."""

    duration: float
    last_row_id: int | None
    changes: int | None
    served_by: str
    internal_stats: Any | None


class D1Result(Protocol):
    """
    Return type of D1PreparedStatement.run() and D1Database.batch().

    Attributes:
        results  – List of rows as plain dicts.
        success  – True when the query executed without errors.
        meta     – Execution metadata (duration, last_row_id, …).
    """

    results: list[dict[str, Any]]
    success: bool
    meta: D1ResultMeta


# ---------------------------------------------------------------------------
# D1PreparedStatement
# ---------------------------------------------------------------------------


class D1PreparedStatement(Protocol):
    """
    A parameterised SQL statement ready to be executed against D1.

    Usage::

        stmt = db.prepare("SELECT * FROM users WHERE id = ?")
        result = await stmt.bind(user_id).first()
    """

    def bind(self, *args: Any) -> "D1PreparedStatement":
        """
        Binds positional values to the `?` placeholders in the SQL string.
        Returns *self* so calls can be chained.
        """
        ...

    async def first(self, column: str | None = None) -> dict[str, Any] | None:
        """
        Executes the statement and returns only the first row.

        Args:
            column: When provided, returns only that column's value instead
                    of the full row dict.

        Returns:
            A dict representing the first row, or None if no rows matched.
        """
        ...

    async def run(self) -> D1Result:
        """
        Executes the statement and returns a D1Result with all matching rows
        plus execution metadata.
        """
        ...

    async def all(self) -> D1Result:
        """
        Alias for run(). Returns a D1Result with all matching rows.
        """
        ...

    async def raw(self, options: dict[str, Any] | None = None) -> list[list[Any]]:
        """
        Executes the statement and returns rows as arrays instead of dicts,
        preserving column order. Slightly faster than run() / all().

        Args:
            options: Pass {"columnNames": True} to prepend a header row with
                     column names.
        """
        ...


# ---------------------------------------------------------------------------
# D1Database
# ---------------------------------------------------------------------------


class D1Database(Protocol):
    """
    Cloudflare D1 database binding.

    Injected by the Workers runtime via ``self.env.<BINDING_NAME>``.  The
    binding name is defined in wrangler.jsonc under ``d1_databases[].binding``.

    Example::

        # In entry.py / WorkerEntrypoint subclass
        db: D1Database = self.env.ubuntu_desktop_db

        # In a repository
        result = await db.prepare(
            "SELECT * FROM users WHERE email = ?"
        ).bind(email).first()
    """

    def prepare(self, query: str) -> D1PreparedStatement:
        """
        Creates a prepared statement from the given SQL string.

        Args:
            query: SQL query string using `?` as the placeholder for bound
                   parameters (SQLite style).

        Returns:
            A D1PreparedStatement that can be further parameterised with
            `.bind()` and executed with `.run()`, `.first()`, etc.
        """
        ...

    async def batch(
        self, statements: list[D1PreparedStatement]
    ) -> list[D1Result]:
        """
        Executes multiple prepared statements in a single round-trip.

        All statements are run inside an implicit transaction; if any
        statement fails the entire batch is rolled back.

        Args:
            statements: List of prepared (and optionally bound) statements.

        Returns:
            One D1Result per statement, in the same order.
        """
        ...

    async def exec(self, query: str) -> D1Result:
        """
        Executes a raw SQL string without parameter binding.

        Suitable for DDL statements (CREATE, ALTER, DROP) or quick ad-hoc
        queries. Prefer ``prepare().bind()`` for any user-supplied values to
        avoid SQL injection.

        Args:
            query: A complete SQL statement.
        """
        ...

    def with_session(self, constraint: str) -> "D1Database":
        """
        Returns a session-aware database handle for read-replication scenarios.

        Args:
            constraint: Either ``"first-primary"`` (always read from the
                        primary) or a previously returned bookmark token.
        """
        ...
