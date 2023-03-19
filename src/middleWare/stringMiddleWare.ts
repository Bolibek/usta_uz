const stringMiddleware = () => (next: (arg: { type: string }) => any) => (action: any) => {
  typeof action === 'string' ? next({type: action}) : next(action)
}

export default stringMiddleware
