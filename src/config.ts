export function handlerError (err: any, vm: any, info: any) {
  console.error(err?.stack ? err.stack : err)
    // store.commit(MutationTypes.SetItems, {
    //   message: err?.message || '',
    //   description: err?.stack || err,
    //   type: TypesAlert.error
    // })
}

export function handlerWarn (msg: any, vm: any, trace: any) {
  console.warn(msg)
  // console.warn(vm)
  console.warn(trace)
  // store.commit(MutationTypes.SetItems, {
  //   message: msg,
  //   description: trace,
  //   type: TypesAlert.warning
  // })
}

