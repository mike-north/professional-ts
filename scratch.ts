


function assertAreEqual<T>(arg1: T, arg2: T) {
    if (arg1 !== arg2) throw new Error('They are not equal');
    // T has meaning in here (just like arg1)
}

// assertAreEqual<IChannel>('abc', 4);
assertAreEqual('abc', 'def')