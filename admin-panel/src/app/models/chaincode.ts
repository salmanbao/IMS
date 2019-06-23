export class InitiateChaincode {
  peers: Array<string>;
  chaincodeName: string;
  chaincodeVersion: string;
  chaincodeType: string;
  fcn: string;
  args: Array<string>;
  constructor(config) {
    this.peers = config.peers;
    this.chaincodeName = config.chaincodeName;
    this.chaincodeVersion = config.chaincodeVersion;
    this.chaincodeType = config.chaincodeType;
    this.fcn = config.fcn;
    this.args = config.args;
  }
}

export class InstallChaincode {
  peers: Array<string>;
  chaincodeName: string;
  chaincodeVersion: string;
  chaincodePath: string;
  chaincodeType: string;

  constructor(_config) {
    this.peers = _config.peers;
    this.chaincodeName = _config.chaincodeName;
    this.chaincodeType = _config.chaincodeType;
    this.chaincodeVersion = _config.chaincodeVersion;
    this.chaincodePath = _config.chaincodePath;
  }
}