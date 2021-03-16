import { BehaviorSubject } from 'rxjs';

export interface Action {
  type: string;
}

export interface ReducerMap {
  [key: string]: Function;
}

export interface State {
  [key: string]: any;
}

export class Store {
  private state$ = new BehaviorSubject<State>(null);

  constructor(public reducers: ReducerMap, private state: State = {}) {}

  dispatch(action: Action) {
    this.notify(action);
    this.state$.next(this.state);
  }

  notify(action: Action) {
    Object.keys(this.reducers).forEach((key) => {
      this.state[key] = this.reducers[key](this.state[key], action);
    });
  }

  subscribe(
    next: (value: State) => void,
    error?: (error: any) => void,
    complete?: () => void
  ) {
    return this.state$.subscribe(next, error, complete);
  }
}
