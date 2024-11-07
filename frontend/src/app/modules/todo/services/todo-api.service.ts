import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Task } from "../interface/task.interface";
import { BehaviorSubject, delay, Observable } from "rxjs";

@Injectable()
export class TodoApiService {
  constructor(private readonly http: HttpClient) {}

  #tasksMockup = new BehaviorSubject<Task[]>([]);

  public getTasks(): Observable<Task[]> {
    return this.#tasksMockup.asObservable().pipe(delay(1000));
  }
}
