mergeInto(LibraryManager.library, {
  Web3Login: function () {
    window.web3gl.login();
  },

  LoginMessage: function () {
    var bufferSize = lengthBytesUTF8(window.web3gl.loginMessage) + 1;
    var buffer = _malloc(bufferSize);
    stringToUTF8(window.web3gl.loginMessage, buffer, bufferSize);
    return buffer;
  },

  CallContract: function (method, abi, contract, args) {
    window.web3gl.callContract(
      Pointer_stringify(method),
      Pointer_stringify(abi),
      Pointer_stringify(contract),
      Pointer_stringify(args)
    );
  },

  CallResponse: function () {
    var bufferSize = lengthBytesUTF8(window.web3gl.callResponse) + 1;
    var buffer = _malloc(bufferSize);
    stringToUTF8(window.web3gl.callResponse, buffer, bufferSize);
    return buffer;
  },

  SendContract: function (method, abi, contract, args, value) {
    window.web3gl.sendContract(
      Pointer_stringify(method),
      Pointer_stringify(abi),
      Pointer_stringify(contract),
      Pointer_stringify(args),
      Pointer_stringify(value)
    );
  },
});