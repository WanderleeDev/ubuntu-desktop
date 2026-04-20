export abstract class TranslationRepository {
  abstract translate(
    text: string,
    from: string,
    to: string
  ): AsyncGenerator<string>;
}
