//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AddTwo
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const addTwoAbi = [
  {
    type: 'function',
    inputs: [{ name: 'a', internalType: 'euint256', type: 'bytes32' }],
    name: 'addTwo',
    outputs: [{ name: '', internalType: 'euint256', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'uint256EInput', internalType: 'bytes', type: 'bytes' }],
    name: 'addTwoEOA',
    outputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'euint256', type: 'bytes32' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'a', internalType: 'euint256', type: 'bytes32' }],
    name: 'addTwoScalar',
    outputs: [{ name: '', internalType: 'euint256', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: 'result', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'callback',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lastResult',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Address
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const addressAbi = [
  { type: 'error', inputs: [{ name: 'target', internalType: 'address', type: 'address' }], name: 'AddressEmptyCode' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BaseAccessControlList
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const baseAccessControlListAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'allow',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'allowTransient',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'allowedTransient',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  { type: 'function', inputs: [], name: 'cleanTransientStorage', outputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'isAllowed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'persistAllowed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'error',
    inputs: [
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'sender', internalType: 'address', type: 'address' },
    ],
    name: 'SenderNotAllowedForHandle',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ContextUpgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const contextUpgradeableAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'version', internalType: 'uint64', type: 'uint64', indexed: false }],
    name: 'Initialized',
  },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CreateX
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const createXAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'initCodeHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'computeCreate2Address',
    outputs: [{ name: 'computedAddress', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'initCodeHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'deployer', internalType: 'address', type: 'address' },
    ],
    name: 'computeCreate2Address',
    outputs: [{ name: 'computedAddress', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'deployer', internalType: 'address', type: 'address' },
    ],
    name: 'computeCreate3Address',
    outputs: [{ name: 'computedAddress', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'salt', internalType: 'bytes32', type: 'bytes32' }],
    name: 'computeCreate3Address',
    outputs: [{ name: 'computedAddress', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'nonce', internalType: 'uint256', type: 'uint256' }],
    name: 'computeCreateAddress',
    outputs: [{ name: 'computedAddress', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'deployer', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'computeCreateAddress',
    outputs: [{ name: 'computedAddress', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'initCode', internalType: 'bytes', type: 'bytes' }],
    name: 'deployCreate',
    outputs: [{ name: 'newContract', internalType: 'address', type: 'address' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'initCode', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'deployCreate2',
    outputs: [{ name: 'newContract', internalType: 'address', type: 'address' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'initCode', internalType: 'bytes', type: 'bytes' }],
    name: 'deployCreate2',
    outputs: [{ name: 'newContract', internalType: 'address', type: 'address' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'initCode', internalType: 'bytes', type: 'bytes' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      {
        name: 'values',
        internalType: 'struct CreateX.Values',
        type: 'tuple',
        components: [
          { name: 'constructorAmount', internalType: 'uint256', type: 'uint256' },
          { name: 'initCallAmount', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'refundAddress', internalType: 'address', type: 'address' },
    ],
    name: 'deployCreate2AndInit',
    outputs: [{ name: 'newContract', internalType: 'address', type: 'address' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'initCode', internalType: 'bytes', type: 'bytes' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      {
        name: 'values',
        internalType: 'struct CreateX.Values',
        type: 'tuple',
        components: [
          { name: 'constructorAmount', internalType: 'uint256', type: 'uint256' },
          { name: 'initCallAmount', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'deployCreate2AndInit',
    outputs: [{ name: 'newContract', internalType: 'address', type: 'address' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'initCode', internalType: 'bytes', type: 'bytes' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      {
        name: 'values',
        internalType: 'struct CreateX.Values',
        type: 'tuple',
        components: [
          { name: 'constructorAmount', internalType: 'uint256', type: 'uint256' },
          { name: 'initCallAmount', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'refundAddress', internalType: 'address', type: 'address' },
    ],
    name: 'deployCreate2AndInit',
    outputs: [{ name: 'newContract', internalType: 'address', type: 'address' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'initCode', internalType: 'bytes', type: 'bytes' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      {
        name: 'values',
        internalType: 'struct CreateX.Values',
        type: 'tuple',
        components: [
          { name: 'constructorAmount', internalType: 'uint256', type: 'uint256' },
          { name: 'initCallAmount', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'deployCreate2AndInit',
    outputs: [{ name: 'newContract', internalType: 'address', type: 'address' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'implementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'deployCreate2Clone',
    outputs: [{ name: 'proxy', internalType: 'address', type: 'address' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'deployCreate2Clone',
    outputs: [{ name: 'proxy', internalType: 'address', type: 'address' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'initCode', internalType: 'bytes', type: 'bytes' }],
    name: 'deployCreate3',
    outputs: [{ name: 'newContract', internalType: 'address', type: 'address' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'initCode', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'deployCreate3',
    outputs: [{ name: 'newContract', internalType: 'address', type: 'address' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'initCode', internalType: 'bytes', type: 'bytes' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      {
        name: 'values',
        internalType: 'struct CreateX.Values',
        type: 'tuple',
        components: [
          { name: 'constructorAmount', internalType: 'uint256', type: 'uint256' },
          { name: 'initCallAmount', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'deployCreate3AndInit',
    outputs: [{ name: 'newContract', internalType: 'address', type: 'address' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'initCode', internalType: 'bytes', type: 'bytes' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      {
        name: 'values',
        internalType: 'struct CreateX.Values',
        type: 'tuple',
        components: [
          { name: 'constructorAmount', internalType: 'uint256', type: 'uint256' },
          { name: 'initCallAmount', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'deployCreate3AndInit',
    outputs: [{ name: 'newContract', internalType: 'address', type: 'address' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'initCode', internalType: 'bytes', type: 'bytes' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      {
        name: 'values',
        internalType: 'struct CreateX.Values',
        type: 'tuple',
        components: [
          { name: 'constructorAmount', internalType: 'uint256', type: 'uint256' },
          { name: 'initCallAmount', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'refundAddress', internalType: 'address', type: 'address' },
    ],
    name: 'deployCreate3AndInit',
    outputs: [{ name: 'newContract', internalType: 'address', type: 'address' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'initCode', internalType: 'bytes', type: 'bytes' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      {
        name: 'values',
        internalType: 'struct CreateX.Values',
        type: 'tuple',
        components: [
          { name: 'constructorAmount', internalType: 'uint256', type: 'uint256' },
          { name: 'initCallAmount', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'refundAddress', internalType: 'address', type: 'address' },
    ],
    name: 'deployCreate3AndInit',
    outputs: [{ name: 'newContract', internalType: 'address', type: 'address' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'initCode', internalType: 'bytes', type: 'bytes' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      {
        name: 'values',
        internalType: 'struct CreateX.Values',
        type: 'tuple',
        components: [
          { name: 'constructorAmount', internalType: 'uint256', type: 'uint256' },
          { name: 'initCallAmount', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'deployCreateAndInit',
    outputs: [{ name: 'newContract', internalType: 'address', type: 'address' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'initCode', internalType: 'bytes', type: 'bytes' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
      {
        name: 'values',
        internalType: 'struct CreateX.Values',
        type: 'tuple',
        components: [
          { name: 'constructorAmount', internalType: 'uint256', type: 'uint256' },
          { name: 'initCallAmount', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'refundAddress', internalType: 'address', type: 'address' },
    ],
    name: 'deployCreateAndInit',
    outputs: [{ name: 'newContract', internalType: 'address', type: 'address' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'deployCreateClone',
    outputs: [{ name: 'proxy', internalType: 'address', type: 'address' }],
    stateMutability: 'payable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'newContract', internalType: 'address', type: 'address', indexed: true },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32', indexed: true },
    ],
    name: 'ContractCreation',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'newContract', internalType: 'address', type: 'address', indexed: true }],
    name: 'ContractCreation',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'newContract', internalType: 'address', type: 'address', indexed: true },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32', indexed: true },
    ],
    name: 'Create3ProxyContractCreation',
  },
  {
    type: 'error',
    inputs: [{ name: 'emitter', internalType: 'address', type: 'address' }],
    name: 'FailedContractCreation',
  },
  {
    type: 'error',
    inputs: [
      { name: 'emitter', internalType: 'address', type: 'address' },
      { name: 'revertData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'FailedContractInitialisation',
  },
  {
    type: 'error',
    inputs: [
      { name: 'emitter', internalType: 'address', type: 'address' },
      { name: 'revertData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'FailedEtherTransfer',
  },
  { type: 'error', inputs: [{ name: 'emitter', internalType: 'address', type: 'address' }], name: 'InvalidNonceValue' },
  { type: 'error', inputs: [{ name: 'emitter', internalType: 'address', type: 'address' }], name: 'InvalidSalt' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DecryptionHandler
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const decryptionHandlerAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'allow',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'allowTransient',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'allowedTransient',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  { type: 'function', inputs: [], name: 'cleanTransientStorage', outputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [
      {
        name: 'result',
        internalType: 'struct DecryptionResult',
        type: 'tuple',
        components: [
          { name: 'abiEncodedResult', internalType: 'bytes32', type: 'bytes32' },
          { name: 'requestId', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'decryptionResultDigest',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newPubkeyAddress', internalType: 'address', type: 'address' }],
    name: 'editPubkeyAddress',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'result',
        internalType: 'struct DecryptionResult',
        type: 'tuple',
        components: [
          { name: 'abiEncodedResult', internalType: 'bytes32', type: 'bytes32' },
          { name: 'requestId', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'fulfillRequest',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getEventCounter',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'requestId', internalType: 'uint256', type: 'uint256' }],
    name: 'getRequest',
    outputs: [
      {
        name: '',
        internalType: 'struct Request',
        type: 'tuple',
        components: [
          { name: 'maxTimestamp', internalType: 'uint256', type: 'uint256' },
          { name: 'callbackContract', internalType: 'address', type: 'address' },
          { name: 'callbackSelector', internalType: 'bytes4', type: 'bytes4' },
          { name: 'fulfilled', internalType: 'bool', type: 'bool' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getRequestIdCounter',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'isAllowed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'hash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'isValidSignature',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'opSignerPubkeyAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'persistAllowed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  { type: 'function', inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [
      { name: 'callbackSelector', internalType: 'bytes4', type: 'bytes4' },
      { name: 'maxTimestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'requestDecryption',
    outputs: [{ name: 'requestId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'requestId', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'handle', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'maxTimestamp', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'DecryptionRequested',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'version', internalType: 'uint64', type: 'uint64', indexed: false }],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'previousOwner', internalType: 'address', type: 'address', indexed: true },
      { name: 'newOwner', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'newPubkeyAddress', internalType: 'address', type: 'address', indexed: false }],
    name: 'PubkeyAddressChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'requestId', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'success', internalType: 'bool', type: 'bool', indexed: false },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'RequestFulfilled',
  },
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  { type: 'error', inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }], name: 'ECDSAInvalidSignatureS' },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'InvalidResultSignature' },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  { type: 'error', inputs: [{ name: 'owner', internalType: 'address', type: 'address' }], name: 'OwnableInvalidOwner' },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'RequestAlreadyFulfilled' },
  { type: 'error', inputs: [], name: 'RequestExpired' },
  {
    type: 'error',
    inputs: [
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'sender', internalType: 'address', type: 'address' },
    ],
    name: 'SenderNotAllowedForHandle',
  },
  { type: 'error', inputs: [{ name: 'str', internalType: 'string', type: 'string' }], name: 'StringTooLong' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DecryptionHandlerEip712Checker
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const decryptionHandlerEip712CheckerAbi = [
  {
    type: 'function',
    inputs: [
      {
        name: 'result',
        internalType: 'struct DecryptionResult',
        type: 'tuple',
        components: [
          { name: 'abiEncodedResult', internalType: 'bytes32', type: 'bytes32' },
          { name: 'requestId', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'decryptionResultDigest',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newPubkeyAddress', internalType: 'address', type: 'address' }],
    name: 'editPubkeyAddress',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'hash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'isValidSignature',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'opSignerPubkeyAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  { type: 'function', inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'version', internalType: 'uint64', type: 'uint64', indexed: false }],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'previousOwner', internalType: 'address', type: 'address', indexed: true },
      { name: 'newOwner', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'newPubkeyAddress', internalType: 'address', type: 'address', indexed: false }],
    name: 'PubkeyAddressChanged',
  },
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  { type: 'error', inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }], name: 'ECDSAInvalidSignatureS' },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  { type: 'error', inputs: [{ name: 'owner', internalType: 'address', type: 'address' }], name: 'OwnableInvalidOwner' },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  { type: 'error', inputs: [{ name: 'str', internalType: 'string', type: 'string' }], name: 'StringTooLong' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DeployUtils
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const deployUtilsAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_SCRIPT',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'deployCreateX',
    outputs: [{ name: 'createX', internalType: 'contract CreateX', type: 'address' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EIP712
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const eip712Abi = [
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  { type: 'error', inputs: [{ name: 'str', internalType: 'string', type: 'string' }], name: 'StringTooLong' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC1967Proxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc1967ProxyAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    stateMutability: 'payable',
  },
  { type: 'fallback', stateMutability: 'payable' },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'implementation', internalType: 'address', type: 'address', indexed: true }],
    name: 'Upgraded',
  },
  { type: 'error', inputs: [{ name: 'target', internalType: 'address', type: 'address' }], name: 'AddressEmptyCode' },
  {
    type: 'error',
    inputs: [{ name: 'implementation', internalType: 'address', type: 'address' }],
    name: 'ERC1967InvalidImplementation',
  },
  { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
  { type: 'error', inputs: [], name: 'FailedCall' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC1967Utils
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc1967UtilsAbi = [
  { type: 'error', inputs: [{ name: 'admin', internalType: 'address', type: 'address' }], name: 'ERC1967InvalidAdmin' },
  {
    type: 'error',
    inputs: [{ name: 'beacon', internalType: 'address', type: 'address' }],
    name: 'ERC1967InvalidBeacon',
  },
  {
    type: 'error',
    inputs: [{ name: 'implementation', internalType: 'address', type: 'address' }],
    name: 'ERC1967InvalidImplementation',
  },
  { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EncryptedInput
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const encryptedInputAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'allow',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'allowTransient',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'allowedTransient',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  { type: 'function', inputs: [], name: 'cleanTransientStorage', outputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [],
    name: 'getEventCounter',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'ciphertext', internalType: 'bytes', type: 'bytes' },
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'contractAddress', internalType: 'address', type: 'address' },
      { name: 'inputType', internalType: 'enum ETypes', type: 'uint8' },
    ],
    name: 'getInputHandle',
    outputs: [{ name: 'generatedHandle', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'op', internalType: 'enum EOps', type: 'uint8' },
      { name: 'returnType', internalType: 'enum ETypes', type: 'uint8' },
      { name: 'value', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getOpResultHandle',
    outputs: [{ name: 'generatedHandle', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'op', internalType: 'enum EOps', type: 'uint8' },
      { name: 'returnType', internalType: 'enum ETypes', type: 'uint8' },
      { name: 'inputA', internalType: 'bytes32', type: 'bytes32' },
      { name: 'inputB', internalType: 'bytes32', type: 'bytes32' },
      { name: 'inputC', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getOpResultHandle',
    outputs: [{ name: 'generatedHandle', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'op', internalType: 'enum EOps', type: 'uint8' },
      { name: 'returnType', internalType: 'enum ETypes', type: 'uint8' },
      { name: 'counter', internalType: 'uint256', type: 'uint256' },
      { name: 'upperBound', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getOpResultHandle',
    outputs: [{ name: 'generatedHandle', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'op', internalType: 'enum EOps', type: 'uint8' },
      { name: 'returnType', internalType: 'enum ETypes', type: 'uint8' },
      { name: 'lhs', internalType: 'bytes32', type: 'bytes32' },
      { name: 'rhs', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getOpResultHandle',
    outputs: [{ name: 'generatedHandle', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'plaintextBytes', internalType: 'bytes32', type: 'bytes32' },
      { name: 'handleType', internalType: 'enum ETypes', type: 'uint8' },
    ],
    name: 'getTrivialEncryptHandle',
    outputs: [{ name: 'generatedHandle', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'isAllowed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'ciphertext', internalType: 'bytes', type: 'bytes' },
      { name: 'user', internalType: 'address', type: 'address' },
    ],
    name: 'newEbool',
    outputs: [{ name: 'newValue', internalType: 'ebool', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'ciphertext', internalType: 'bytes', type: 'bytes' },
      { name: 'user', internalType: 'address', type: 'address' },
    ],
    name: 'newEuint256',
    outputs: [{ name: 'newValue', internalType: 'euint256', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'persistAllowed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'result', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'contractAddress', internalType: 'address', type: 'address', indexed: true },
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      { name: 'inputType', internalType: 'enum ETypes', type: 'uint8', indexed: false },
      { name: 'ciphertext', internalType: 'bytes', type: 'bytes', indexed: false },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'NewInput',
  },
  { type: 'error', inputs: [], name: 'HandleAlreadyExists' },
  {
    type: 'error',
    inputs: [
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'sender', internalType: 'address', type: 'address' },
    ],
    name: 'SenderNotAllowedForHandle',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EncryptedOperations
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const encryptedOperationsAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'allow',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'allowTransient',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'allowedTransient',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  { type: 'function', inputs: [], name: 'cleanTransientStorage', outputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32' },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32' },
    ],
    name: 'eAdd',
    outputs: [{ name: 'result', internalType: 'euint256', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'bytes32', type: 'bytes32' },
      { name: 'rhs', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'eBitAnd',
    outputs: [{ name: 'result', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'bytes32', type: 'bytes32' },
      { name: 'rhs', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'eBitOr',
    outputs: [{ name: 'result', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'bytes32', type: 'bytes32' },
      { name: 'rhs', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'eBitXor',
    outputs: [{ name: 'result', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'ct', internalType: 'bytes32', type: 'bytes32' },
      { name: 'toType', internalType: 'enum ETypes', type: 'uint8' },
    ],
    name: 'eCast',
    outputs: [{ name: 'result', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32' },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32' },
    ],
    name: 'eDiv',
    outputs: [{ name: 'result', internalType: 'euint256', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32' },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32' },
    ],
    name: 'eEq',
    outputs: [{ name: 'result', internalType: 'ebool', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32' },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32' },
    ],
    name: 'eGe',
    outputs: [{ name: 'result', internalType: 'ebool', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32' },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32' },
    ],
    name: 'eGt',
    outputs: [{ name: 'result', internalType: 'ebool', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'control', internalType: 'ebool', type: 'bytes32' },
      { name: 'ifTrue', internalType: 'bytes32', type: 'bytes32' },
      { name: 'ifFalse', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'eIfThenElse',
    outputs: [{ name: 'result', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32' },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32' },
    ],
    name: 'eLe',
    outputs: [{ name: 'result', internalType: 'ebool', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32' },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32' },
    ],
    name: 'eLt',
    outputs: [{ name: 'result', internalType: 'ebool', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32' },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32' },
    ],
    name: 'eMax',
    outputs: [{ name: 'result', internalType: 'euint256', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32' },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32' },
    ],
    name: 'eMin',
    outputs: [{ name: 'result', internalType: 'euint256', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32' },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32' },
    ],
    name: 'eMul',
    outputs: [{ name: 'result', internalType: 'euint256', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32' },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32' },
    ],
    name: 'eNe',
    outputs: [{ name: 'result', internalType: 'ebool', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'operand', internalType: 'ebool', type: 'bytes32' }],
    name: 'eNot',
    outputs: [{ name: 'result', internalType: 'ebool', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'randType', internalType: 'enum ETypes', type: 'uint8' }],
    name: 'eRand',
    outputs: [{ name: 'result', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'upperBound', internalType: 'bytes32', type: 'bytes32' },
      { name: 'randType', internalType: 'enum ETypes', type: 'uint8' },
    ],
    name: 'eRandBounded',
    outputs: [{ name: 'result', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32' },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32' },
    ],
    name: 'eRem',
    outputs: [{ name: 'result', internalType: 'euint256', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32' },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32' },
    ],
    name: 'eRotl',
    outputs: [{ name: 'result', internalType: 'euint256', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32' },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32' },
    ],
    name: 'eRotr',
    outputs: [{ name: 'result', internalType: 'euint256', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32' },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32' },
    ],
    name: 'eShl',
    outputs: [{ name: 'result', internalType: 'euint256', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32' },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32' },
    ],
    name: 'eShr',
    outputs: [{ name: 'result', internalType: 'euint256', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32' },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32' },
    ],
    name: 'eSub',
    outputs: [{ name: 'result', internalType: 'euint256', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getEventCounter',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'ciphertext', internalType: 'bytes', type: 'bytes' },
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'contractAddress', internalType: 'address', type: 'address' },
      { name: 'inputType', internalType: 'enum ETypes', type: 'uint8' },
    ],
    name: 'getInputHandle',
    outputs: [{ name: 'generatedHandle', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'op', internalType: 'enum EOps', type: 'uint8' },
      { name: 'returnType', internalType: 'enum ETypes', type: 'uint8' },
      { name: 'value', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getOpResultHandle',
    outputs: [{ name: 'generatedHandle', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'op', internalType: 'enum EOps', type: 'uint8' },
      { name: 'returnType', internalType: 'enum ETypes', type: 'uint8' },
      { name: 'inputA', internalType: 'bytes32', type: 'bytes32' },
      { name: 'inputB', internalType: 'bytes32', type: 'bytes32' },
      { name: 'inputC', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getOpResultHandle',
    outputs: [{ name: 'generatedHandle', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'op', internalType: 'enum EOps', type: 'uint8' },
      { name: 'returnType', internalType: 'enum ETypes', type: 'uint8' },
      { name: 'counter', internalType: 'uint256', type: 'uint256' },
      { name: 'upperBound', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getOpResultHandle',
    outputs: [{ name: 'generatedHandle', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'op', internalType: 'enum EOps', type: 'uint8' },
      { name: 'returnType', internalType: 'enum ETypes', type: 'uint8' },
      { name: 'lhs', internalType: 'bytes32', type: 'bytes32' },
      { name: 'rhs', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getOpResultHandle',
    outputs: [{ name: 'generatedHandle', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'plaintextBytes', internalType: 'bytes32', type: 'bytes32' },
      { name: 'handleType', internalType: 'enum ETypes', type: 'uint8' },
    ],
    name: 'getTrivialEncryptHandle',
    outputs: [{ name: 'generatedHandle', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'isAllowed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'persistAllowed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'EAdd',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'EBitAnd',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'EBitOr',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'EBitXor',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'ct', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'toType', internalType: 'uint8', type: 'uint8', indexed: true },
      { name: 'result', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'ECast',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'EDiv',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'ebool', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'EEq',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'ebool', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'EGe',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'ebool', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'EGt',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'control', internalType: 'ebool', type: 'bytes32', indexed: false },
      { name: 'ifTrue', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'ifFalse', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'EIfThenElse',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'ebool', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'ELe',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'ebool', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'ELt',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'EMax',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'EMin',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'EMul',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'ebool', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'ENe',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'operand', internalType: 'ebool', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'ebool', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'ENot',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'counter', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'randType', internalType: 'enum ETypes', type: 'uint8', indexed: false },
      { name: 'result', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'ERand',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'counter', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'randType', internalType: 'enum ETypes', type: 'uint8', indexed: false },
      { name: 'upperBound', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'ERandBounded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'ERem',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'ERotl',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'ERotr',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'EShl',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'EShr',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'ESub',
  },
  {
    type: 'error',
    inputs: [
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'sender', internalType: 'address', type: 'address' },
    ],
    name: 'SenderNotAllowedForHandle',
  },
  {
    type: 'error',
    inputs: [
      { name: 'actual', internalType: 'enum ETypes', type: 'uint8' },
      { name: 'expected', internalType: 'enum ETypes', type: 'uint8' },
    ],
    name: 'UnexpectedType',
  },
  { type: 'error', inputs: [{ name: 'actual', internalType: 'enum ETypes', type: 'uint8' }], name: 'UnsupportedType' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const errorsAbi = [
  { type: 'error', inputs: [], name: 'FailedCall' },
  { type: 'error', inputs: [], name: 'FailedDeployment' },
  {
    type: 'error',
    inputs: [
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InsufficientBalance',
  },
  { type: 'error', inputs: [{ name: '', internalType: 'address', type: 'address' }], name: 'MissingPrecompile' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EventCounter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const eventCounterAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'getEventCounter',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FakeIncoInfraBase
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const fakeIncoInfraBaseAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [],
    name: 'IS_TEST',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeArtifacts',
    outputs: [{ name: 'excludedArtifacts_', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeContracts',
    outputs: [{ name: 'excludedContracts_', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSelectors',
    outputs: [
      {
        name: 'excludedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSenders',
    outputs: [{ name: 'excludedSenders_', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifactSelectors',
    outputs: [
      {
        name: 'targetedArtifactSelectors_',
        internalType: 'struct StdInvariant.FuzzArtifactSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'artifact', internalType: 'string', type: 'string' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifacts',
    outputs: [{ name: 'targetedArtifacts_', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetContracts',
    outputs: [{ name: 'targetedContracts_', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetInterfaces',
    outputs: [
      {
        name: 'targetedInterfaces_',
        internalType: 'struct StdInvariant.FuzzInterface[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'artifacts', internalType: 'string[]', type: 'string[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSelectors',
    outputs: [
      {
        name: 'targetedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSenders',
    outputs: [{ name: 'targetedSenders_', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'string', type: 'string', indexed: false }],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'address', type: 'address', indexed: false }],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'val', internalType: 'uint256[]', type: 'uint256[]', indexed: false }],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'val', internalType: 'int256[]', type: 'int256[]', indexed: false }],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'val', internalType: 'address[]', type: 'address[]', indexed: false }],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'bytes', type: 'bytes', indexed: false }],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32', indexed: false }],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'int256', type: 'int256', indexed: false }],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256[]', type: 'uint256[]', indexed: false },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256[]', type: 'int256[]', indexed: false },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address[]', type: 'address[]', indexed: false },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      { name: 'decimals', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'decimals', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'string', type: 'string', indexed: false }],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256', indexed: false }],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'bytes', type: 'bytes', indexed: false }],
    name: 'logs',
  },
  {
    type: 'error',
    inputs: [{ name: 'inputType', internalType: 'enum ETypes', type: 'uint8' }],
    name: 'UnsupportedTypeInput',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// HandleGeneration
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const handleGenerationAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'ciphertext', internalType: 'bytes', type: 'bytes' },
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'contractAddress', internalType: 'address', type: 'address' },
      { name: 'inputType', internalType: 'enum ETypes', type: 'uint8' },
    ],
    name: 'getInputHandle',
    outputs: [{ name: 'generatedHandle', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'op', internalType: 'enum EOps', type: 'uint8' },
      { name: 'returnType', internalType: 'enum ETypes', type: 'uint8' },
      { name: 'value', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getOpResultHandle',
    outputs: [{ name: 'generatedHandle', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'op', internalType: 'enum EOps', type: 'uint8' },
      { name: 'returnType', internalType: 'enum ETypes', type: 'uint8' },
      { name: 'inputA', internalType: 'bytes32', type: 'bytes32' },
      { name: 'inputB', internalType: 'bytes32', type: 'bytes32' },
      { name: 'inputC', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getOpResultHandle',
    outputs: [{ name: 'generatedHandle', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'op', internalType: 'enum EOps', type: 'uint8' },
      { name: 'returnType', internalType: 'enum ETypes', type: 'uint8' },
      { name: 'counter', internalType: 'uint256', type: 'uint256' },
      { name: 'upperBound', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getOpResultHandle',
    outputs: [{ name: 'generatedHandle', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'op', internalType: 'enum EOps', type: 'uint8' },
      { name: 'returnType', internalType: 'enum ETypes', type: 'uint8' },
      { name: 'lhs', internalType: 'bytes32', type: 'bytes32' },
      { name: 'rhs', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getOpResultHandle',
    outputs: [{ name: 'generatedHandle', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'plaintextBytes', internalType: 'bytes32', type: 'bytes32' },
      { name: 'handleType', internalType: 'enum ETypes', type: 'uint8' },
    ],
    name: 'getTrivialEncryptHandle',
    outputs: [{ name: 'generatedHandle', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IBeacon
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iBeaconAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'implementation',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1822Proxiable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1822ProxiableAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1967
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1967Abi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'previousAdmin', internalType: 'address', type: 'address', indexed: false },
      { name: 'newAdmin', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'beacon', internalType: 'address', type: 'address', indexed: true }],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'implementation', internalType: 'address', type: 'address', indexed: true }],
    name: 'Upgraded',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC5267
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc5267Abi = [
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMulticall3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMulticall3Abi = [
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'returnData', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3Value[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3Value',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'blockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBasefee',
    outputs: [{ name: 'basefee', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'blockNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'getBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBlockNumber',
    outputs: [{ name: 'blockNumber', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getChainId',
    outputs: [{ name: 'chainid', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockCoinbase',
    outputs: [{ name: 'coinbase', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockDifficulty',
    outputs: [{ name: 'difficulty', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockGasLimit',
    outputs: [{ name: 'gaslimit', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockTimestamp',
    outputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'getEthBalance',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getLastBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryAggregate',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryBlockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IncoLightning
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const incoLightningAbi = [
  {
    type: 'constructor',
    inputs: [{ name: 'salt', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  { type: 'fallback', stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [],
    name: 'UPGRADE_INTERFACE_VERSION',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'allow',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'allowTransient',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'allowedTransient',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'bool', type: 'bool' }],
    name: 'asEbool',
    outputs: [{ name: 'newEbool', internalType: 'ebool', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'asEuint256',
    outputs: [{ name: 'newEuint256', internalType: 'euint256', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  { type: 'function', inputs: [], name: 'cleanTransientStorage', outputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [
      {
        name: 'result',
        internalType: 'struct DecryptionResult',
        type: 'tuple',
        components: [
          { name: 'abiEncodedResult', internalType: 'bytes32', type: 'bytes32' },
          { name: 'requestId', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'decryptionResultDigest',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32' },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32' },
    ],
    name: 'eAdd',
    outputs: [{ name: 'result', internalType: 'euint256', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'bytes32', type: 'bytes32' },
      { name: 'rhs', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'eBitAnd',
    outputs: [{ name: 'result', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'bytes32', type: 'bytes32' },
      { name: 'rhs', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'eBitOr',
    outputs: [{ name: 'result', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'bytes32', type: 'bytes32' },
      { name: 'rhs', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'eBitXor',
    outputs: [{ name: 'result', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'ct', internalType: 'bytes32', type: 'bytes32' },
      { name: 'toType', internalType: 'enum ETypes', type: 'uint8' },
    ],
    name: 'eCast',
    outputs: [{ name: 'result', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32' },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32' },
    ],
    name: 'eDiv',
    outputs: [{ name: 'result', internalType: 'euint256', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32' },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32' },
    ],
    name: 'eEq',
    outputs: [{ name: 'result', internalType: 'ebool', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32' },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32' },
    ],
    name: 'eGe',
    outputs: [{ name: 'result', internalType: 'ebool', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32' },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32' },
    ],
    name: 'eGt',
    outputs: [{ name: 'result', internalType: 'ebool', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'control', internalType: 'ebool', type: 'bytes32' },
      { name: 'ifTrue', internalType: 'bytes32', type: 'bytes32' },
      { name: 'ifFalse', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'eIfThenElse',
    outputs: [{ name: 'result', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32' },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32' },
    ],
    name: 'eLe',
    outputs: [{ name: 'result', internalType: 'ebool', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32' },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32' },
    ],
    name: 'eLt',
    outputs: [{ name: 'result', internalType: 'ebool', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32' },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32' },
    ],
    name: 'eMax',
    outputs: [{ name: 'result', internalType: 'euint256', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32' },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32' },
    ],
    name: 'eMin',
    outputs: [{ name: 'result', internalType: 'euint256', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32' },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32' },
    ],
    name: 'eMul',
    outputs: [{ name: 'result', internalType: 'euint256', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32' },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32' },
    ],
    name: 'eNe',
    outputs: [{ name: 'result', internalType: 'ebool', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'operand', internalType: 'ebool', type: 'bytes32' }],
    name: 'eNot',
    outputs: [{ name: 'result', internalType: 'ebool', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'randType', internalType: 'enum ETypes', type: 'uint8' }],
    name: 'eRand',
    outputs: [{ name: 'result', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'upperBound', internalType: 'bytes32', type: 'bytes32' },
      { name: 'randType', internalType: 'enum ETypes', type: 'uint8' },
    ],
    name: 'eRandBounded',
    outputs: [{ name: 'result', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32' },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32' },
    ],
    name: 'eRem',
    outputs: [{ name: 'result', internalType: 'euint256', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32' },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32' },
    ],
    name: 'eRotl',
    outputs: [{ name: 'result', internalType: 'euint256', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32' },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32' },
    ],
    name: 'eRotr',
    outputs: [{ name: 'result', internalType: 'euint256', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32' },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32' },
    ],
    name: 'eShl',
    outputs: [{ name: 'result', internalType: 'euint256', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32' },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32' },
    ],
    name: 'eShr',
    outputs: [{ name: 'result', internalType: 'euint256', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32' },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32' },
    ],
    name: 'eSub',
    outputs: [{ name: 'result', internalType: 'euint256', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newPubkeyAddress', internalType: 'address', type: 'address' }],
    name: 'editPubkeyAddress',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'result',
        internalType: 'struct DecryptionResult',
        type: 'tuple',
        components: [
          { name: 'abiEncodedResult', internalType: 'bytes32', type: 'bytes32' },
          { name: 'requestId', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'fulfillRequest',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getEventCounter',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'ciphertext', internalType: 'bytes', type: 'bytes' },
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'contractAddress', internalType: 'address', type: 'address' },
      { name: 'inputType', internalType: 'enum ETypes', type: 'uint8' },
    ],
    name: 'getInputHandle',
    outputs: [{ name: 'generatedHandle', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getName',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'op', internalType: 'enum EOps', type: 'uint8' },
      { name: 'returnType', internalType: 'enum ETypes', type: 'uint8' },
      { name: 'value', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getOpResultHandle',
    outputs: [{ name: 'generatedHandle', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'op', internalType: 'enum EOps', type: 'uint8' },
      { name: 'returnType', internalType: 'enum ETypes', type: 'uint8' },
      { name: 'inputA', internalType: 'bytes32', type: 'bytes32' },
      { name: 'inputB', internalType: 'bytes32', type: 'bytes32' },
      { name: 'inputC', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getOpResultHandle',
    outputs: [{ name: 'generatedHandle', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'op', internalType: 'enum EOps', type: 'uint8' },
      { name: 'returnType', internalType: 'enum ETypes', type: 'uint8' },
      { name: 'counter', internalType: 'uint256', type: 'uint256' },
      { name: 'upperBound', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getOpResultHandle',
    outputs: [{ name: 'generatedHandle', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'op', internalType: 'enum EOps', type: 'uint8' },
      { name: 'returnType', internalType: 'enum ETypes', type: 'uint8' },
      { name: 'lhs', internalType: 'bytes32', type: 'bytes32' },
      { name: 'rhs', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getOpResultHandle',
    outputs: [{ name: 'generatedHandle', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'requestId', internalType: 'uint256', type: 'uint256' }],
    name: 'getRequest',
    outputs: [
      {
        name: '',
        internalType: 'struct Request',
        type: 'tuple',
        components: [
          { name: 'maxTimestamp', internalType: 'uint256', type: 'uint256' },
          { name: 'callbackContract', internalType: 'address', type: 'address' },
          { name: 'callbackSelector', internalType: 'bytes4', type: 'bytes4' },
          { name: 'fulfilled', internalType: 'bool', type: 'bool' },
          { name: 'data', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getRequestIdCounter',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'plaintextBytes', internalType: 'bytes32', type: 'bytes32' },
      { name: 'handleType', internalType: 'enum ETypes', type: 'uint8' },
    ],
    name: 'getTrivialEncryptHandle',
    outputs: [{ name: 'generatedHandle', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getVersion',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getVersionedName',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'isAllowed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'hash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'isValidSignature',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'majorVersion',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'minorVersion',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'ciphertext', internalType: 'bytes', type: 'bytes' },
      { name: 'user', internalType: 'address', type: 'address' },
    ],
    name: 'newEbool',
    outputs: [{ name: 'newValue', internalType: 'ebool', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'ciphertext', internalType: 'bytes', type: 'bytes' },
      { name: 'user', internalType: 'address', type: 'address' },
    ],
    name: 'newEuint256',
    outputs: [{ name: 'newValue', internalType: 'euint256', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'opSignerPubkeyAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'patchVersion',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'persistAllowed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  { type: 'function', inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [
      { name: 'callbackSelector', internalType: 'bytes4', type: 'bytes4' },
      { name: 'maxTimestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'requestDecryption',
    outputs: [{ name: 'requestId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'salt',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'requestId', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'handle', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'maxTimestamp', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'DecryptionRequested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'EAdd',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'EBitAnd',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'EBitOr',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'EBitXor',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'ct', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'toType', internalType: 'uint8', type: 'uint8', indexed: true },
      { name: 'result', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'ECast',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'EDiv',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'ebool', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'EEq',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'ebool', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'EGe',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'ebool', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'EGt',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'control', internalType: 'ebool', type: 'bytes32', indexed: false },
      { name: 'ifTrue', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'ifFalse', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'EIfThenElse',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'ebool', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'ELe',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'ebool', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'ELt',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'EMax',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'EMin',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'EMul',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'ebool', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'ENe',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'operand', internalType: 'ebool', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'ebool', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'ENot',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'counter', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'randType', internalType: 'enum ETypes', type: 'uint8', indexed: false },
      { name: 'result', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'ERand',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'counter', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'randType', internalType: 'enum ETypes', type: 'uint8', indexed: false },
      { name: 'upperBound', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'ERandBounded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'ERem',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'ERotl',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'ERotr',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'EShl',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'EShr',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'lhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'rhs', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'result', internalType: 'euint256', type: 'bytes32', indexed: true },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'ESub',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'version', internalType: 'uint64', type: 'uint64', indexed: false }],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'result', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'contractAddress', internalType: 'address', type: 'address', indexed: true },
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      { name: 'inputType', internalType: 'enum ETypes', type: 'uint8', indexed: false },
      { name: 'ciphertext', internalType: 'bytes', type: 'bytes', indexed: false },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'NewInput',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'previousOwner', internalType: 'address', type: 'address', indexed: true },
      { name: 'newOwner', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'newPubkeyAddress', internalType: 'address', type: 'address', indexed: false }],
    name: 'PubkeyAddressChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'requestId', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'success', internalType: 'bool', type: 'bool', indexed: false },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'RequestFulfilled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'result', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'plainTextBytes', internalType: 'bytes32', type: 'bytes32', indexed: false },
      { name: 'handleType', internalType: 'enum ETypes', type: 'uint8', indexed: false },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'TrivialEncrypt',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'implementation', internalType: 'address', type: 'address', indexed: true }],
    name: 'Upgraded',
  },
  { type: 'error', inputs: [{ name: 'target', internalType: 'address', type: 'address' }], name: 'AddressEmptyCode' },
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  { type: 'error', inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }], name: 'ECDSAInvalidSignatureS' },
  {
    type: 'error',
    inputs: [{ name: 'implementation', internalType: 'address', type: 'address' }],
    name: 'ERC1967InvalidImplementation',
  },
  { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
  { type: 'error', inputs: [], name: 'FailedCall' },
  { type: 'error', inputs: [], name: 'HandleAlreadyExists' },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'InvalidResultSignature' },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  { type: 'error', inputs: [{ name: 'owner', internalType: 'address', type: 'address' }], name: 'OwnableInvalidOwner' },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'RequestAlreadyFulfilled' },
  { type: 'error', inputs: [], name: 'RequestExpired' },
  {
    type: 'error',
    inputs: [
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'sender', internalType: 'address', type: 'address' },
    ],
    name: 'SenderNotAllowedForHandle',
  },
  { type: 'error', inputs: [{ name: 'str', internalType: 'string', type: 'string' }], name: 'StringTooLong' },
  { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
  {
    type: 'error',
    inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
    name: 'UUPSUnsupportedProxiableUUID',
  },
  {
    type: 'error',
    inputs: [
      { name: 'actual', internalType: 'enum ETypes', type: 'uint8' },
      { name: 'expected', internalType: 'enum ETypes', type: 'uint8' },
    ],
    name: 'UnexpectedType',
  },
  { type: 'error', inputs: [{ name: 'actual', internalType: 'enum ETypes', type: 'uint8' }], name: 'UnsupportedType' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IncoTest
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const incoTestAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [],
    name: 'IS_SCRIPT',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'IS_TEST',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'deployCreateX',
    outputs: [{ name: 'createX', internalType: 'contract CreateX', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeArtifacts',
    outputs: [{ name: 'excludedArtifacts_', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeContracts',
    outputs: [{ name: 'excludedContracts_', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSelectors',
    outputs: [
      {
        name: 'excludedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSenders',
    outputs: [{ name: 'excludedSenders_', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  { type: 'function', inputs: [], name: 'setUp', outputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifactSelectors',
    outputs: [
      {
        name: 'targetedArtifactSelectors_',
        internalType: 'struct StdInvariant.FuzzArtifactSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'artifact', internalType: 'string', type: 'string' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifacts',
    outputs: [{ name: 'targetedArtifacts_', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetContracts',
    outputs: [{ name: 'targetedContracts_', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetInterfaces',
    outputs: [
      {
        name: 'targetedInterfaces_',
        internalType: 'struct StdInvariant.FuzzInterface[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'artifacts', internalType: 'string[]', type: 'string[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSelectors',
    outputs: [
      {
        name: 'targetedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSenders',
    outputs: [{ name: 'targetedSenders_', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'string', type: 'string', indexed: false }],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'address', type: 'address', indexed: false }],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'val', internalType: 'uint256[]', type: 'uint256[]', indexed: false }],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'val', internalType: 'int256[]', type: 'int256[]', indexed: false }],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'val', internalType: 'address[]', type: 'address[]', indexed: false }],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'bytes', type: 'bytes', indexed: false }],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32', indexed: false }],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'int256', type: 'int256', indexed: false }],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256[]', type: 'uint256[]', indexed: false },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256[]', type: 'int256[]', indexed: false },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address[]', type: 'address[]', indexed: false },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      { name: 'decimals', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'decimals', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'string', type: 'string', indexed: false }],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256', indexed: false }],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'bytes', type: 'bytes', indexed: false }],
    name: 'logs',
  },
  {
    type: 'error',
    inputs: [{ name: 'inputType', internalType: 'enum ETypes', type: 'uint8' }],
    name: 'UnsupportedTypeInput',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Initializable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const initializableAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'version', internalType: 'uint64', type: 'uint64', indexed: false }],
    name: 'Initialized',
  },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MockOpHandler
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mockOpHandlerAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_TEST',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeArtifacts',
    outputs: [{ name: 'excludedArtifacts_', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeContracts',
    outputs: [{ name: 'excludedContracts_', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSelectors',
    outputs: [
      {
        name: 'excludedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSenders',
    outputs: [{ name: 'excludedSenders_', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifactSelectors',
    outputs: [
      {
        name: 'targetedArtifactSelectors_',
        internalType: 'struct StdInvariant.FuzzArtifactSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'artifact', internalType: 'string', type: 'string' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifacts',
    outputs: [{ name: 'targetedArtifacts_', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetContracts',
    outputs: [{ name: 'targetedContracts_', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetInterfaces',
    outputs: [
      {
        name: 'targetedInterfaces_',
        internalType: 'struct StdInvariant.FuzzInterface[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'artifacts', internalType: 'string[]', type: 'string[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSelectors',
    outputs: [
      {
        name: 'targetedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSenders',
    outputs: [{ name: 'targetedSenders_', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'string', type: 'string', indexed: false }],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'address', type: 'address', indexed: false }],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'val', internalType: 'uint256[]', type: 'uint256[]', indexed: false }],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'val', internalType: 'int256[]', type: 'int256[]', indexed: false }],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'val', internalType: 'address[]', type: 'address[]', indexed: false }],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'bytes', type: 'bytes', indexed: false }],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32', indexed: false }],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'int256', type: 'int256', indexed: false }],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256[]', type: 'uint256[]', indexed: false },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256[]', type: 'int256[]', indexed: false },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address[]', type: 'address[]', indexed: false },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      { name: 'decimals', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'decimals', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'string', type: 'string', indexed: false }],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256', indexed: false }],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'bytes', type: 'bytes', indexed: false }],
    name: 'logs',
  },
  {
    type: 'error',
    inputs: [{ name: 'inputType', internalType: 'enum ETypes', type: 'uint8' }],
    name: 'UnsupportedTypeInput',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OwnableUpgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownableUpgradeableAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  { type: 'function', inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'version', internalType: 'uint64', type: 'uint64', indexed: false }],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'previousOwner', internalType: 'address', type: 'address', indexed: true },
      { name: 'newOwner', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  { type: 'error', inputs: [{ name: 'owner', internalType: 'address', type: 'address' }], name: 'OwnableInvalidOwner' },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Proxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const proxyAbi = [{ type: 'fallback', stateMutability: 'payable' }] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SafeCast
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const safeCastAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'int256', type: 'int256' },
    ],
    name: 'SafeCastOverflowedIntDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    name: 'SafeCastOverflowedIntToUint',
  },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'SafeCastOverflowedUintToInt',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Script
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const scriptAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_SCRIPT',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SignatureVerifier
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const signatureVerifierAbi = [
  {
    type: 'function',
    inputs: [{ name: 'newPubkeyAddress', internalType: 'address', type: 'address' }],
    name: 'editPubkeyAddress',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'hash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'isValidSignature',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'opSignerPubkeyAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  { type: 'function', inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'version', internalType: 'uint64', type: 'uint64', indexed: false }],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'previousOwner', internalType: 'address', type: 'address', indexed: true },
      { name: 'newOwner', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'newPubkeyAddress', internalType: 'address', type: 'address', indexed: false }],
    name: 'PubkeyAddressChanged',
  },
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  { type: 'error', inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }], name: 'ECDSAInvalidSignatureS' },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  { type: 'error', inputs: [{ name: 'owner', internalType: 'address', type: 'address' }], name: 'OwnableInvalidOwner' },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SimpleConfidentialToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const simpleConfidentialTokenAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'euint256', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'valueInput', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'ebool', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'euint256', type: 'bytes32' },
    ],
    name: 'transfer',
    outputs: [{ name: 'success', internalType: 'ebool', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// StdAssertions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stdAssertionsAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'string', type: 'string', indexed: false }],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'address', type: 'address', indexed: false }],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'val', internalType: 'uint256[]', type: 'uint256[]', indexed: false }],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'val', internalType: 'int256[]', type: 'int256[]', indexed: false }],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'val', internalType: 'address[]', type: 'address[]', indexed: false }],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'bytes', type: 'bytes', indexed: false }],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32', indexed: false }],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'int256', type: 'int256', indexed: false }],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256[]', type: 'uint256[]', indexed: false },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256[]', type: 'int256[]', indexed: false },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address[]', type: 'address[]', indexed: false },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      { name: 'decimals', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'decimals', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'string', type: 'string', indexed: false }],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256', indexed: false }],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'bytes', type: 'bytes', indexed: false }],
    name: 'logs',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// StdInvariant
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stdInvariantAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'excludeArtifacts',
    outputs: [{ name: 'excludedArtifacts_', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeContracts',
    outputs: [{ name: 'excludedContracts_', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSelectors',
    outputs: [
      {
        name: 'excludedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSenders',
    outputs: [{ name: 'excludedSenders_', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifactSelectors',
    outputs: [
      {
        name: 'targetedArtifactSelectors_',
        internalType: 'struct StdInvariant.FuzzArtifactSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'artifact', internalType: 'string', type: 'string' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifacts',
    outputs: [{ name: 'targetedArtifacts_', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetContracts',
    outputs: [{ name: 'targetedContracts_', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetInterfaces',
    outputs: [
      {
        name: 'targetedInterfaces_',
        internalType: 'struct StdInvariant.FuzzInterface[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'artifacts', internalType: 'string[]', type: 'string[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSelectors',
    outputs: [
      {
        name: 'targetedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSenders',
    outputs: [{ name: 'targetedSenders_', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Test
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const testAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_TEST',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeArtifacts',
    outputs: [{ name: 'excludedArtifacts_', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeContracts',
    outputs: [{ name: 'excludedContracts_', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSelectors',
    outputs: [
      {
        name: 'excludedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSenders',
    outputs: [{ name: 'excludedSenders_', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifactSelectors',
    outputs: [
      {
        name: 'targetedArtifactSelectors_',
        internalType: 'struct StdInvariant.FuzzArtifactSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'artifact', internalType: 'string', type: 'string' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifacts',
    outputs: [{ name: 'targetedArtifacts_', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetContracts',
    outputs: [{ name: 'targetedContracts_', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetInterfaces',
    outputs: [
      {
        name: 'targetedInterfaces_',
        internalType: 'struct StdInvariant.FuzzInterface[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'artifacts', internalType: 'string[]', type: 'string[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSelectors',
    outputs: [
      {
        name: 'targetedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSenders',
    outputs: [{ name: 'targetedSenders_', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'string', type: 'string', indexed: false }],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'address', type: 'address', indexed: false }],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'val', internalType: 'uint256[]', type: 'uint256[]', indexed: false }],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'val', internalType: 'int256[]', type: 'int256[]', indexed: false }],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'val', internalType: 'address[]', type: 'address[]', indexed: false }],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'bytes', type: 'bytes', indexed: false }],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32', indexed: false }],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'int256', type: 'int256', indexed: false }],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256[]', type: 'uint256[]', indexed: false },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256[]', type: 'int256[]', indexed: false },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address[]', type: 'address[]', indexed: false },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      { name: 'decimals', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'decimals', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'string', type: 'string', indexed: false }],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256', indexed: false }],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'bytes', type: 'bytes', indexed: false }],
    name: 'logs',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TestSimpleConfidentialToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const testSimpleConfidentialTokenAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_SCRIPT',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'IS_TEST',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'deployCreateX',
    outputs: [{ name: 'createX', internalType: 'contract CreateX', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeArtifacts',
    outputs: [{ name: 'excludedArtifacts_', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeContracts',
    outputs: [{ name: 'excludedContracts_', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSelectors',
    outputs: [
      {
        name: 'excludedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSenders',
    outputs: [{ name: 'excludedSenders_', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  { type: 'function', inputs: [], name: 'setUp', outputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifactSelectors',
    outputs: [
      {
        name: 'targetedArtifactSelectors_',
        internalType: 'struct StdInvariant.FuzzArtifactSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'artifact', internalType: 'string', type: 'string' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifacts',
    outputs: [{ name: 'targetedArtifacts_', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetContracts',
    outputs: [{ name: 'targetedContracts_', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetInterfaces',
    outputs: [
      {
        name: 'targetedInterfaces_',
        internalType: 'struct StdInvariant.FuzzInterface[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'artifacts', internalType: 'string[]', type: 'string[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSelectors',
    outputs: [
      {
        name: 'targetedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSenders',
    outputs: [{ name: 'targetedSenders_', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  { type: 'function', inputs: [], name: 'testTransfer', outputs: [], stateMutability: 'nonpayable' },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'string', type: 'string', indexed: false }],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'address', type: 'address', indexed: false }],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'val', internalType: 'uint256[]', type: 'uint256[]', indexed: false }],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'val', internalType: 'int256[]', type: 'int256[]', indexed: false }],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'val', internalType: 'address[]', type: 'address[]', indexed: false }],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'bytes', type: 'bytes', indexed: false }],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32', indexed: false }],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'int256', type: 'int256', indexed: false }],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256[]', type: 'uint256[]', indexed: false },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256[]', type: 'int256[]', indexed: false },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address[]', type: 'address[]', indexed: false },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      { name: 'decimals', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'decimals', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'string', type: 'string', indexed: false }],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256', indexed: false }],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'bytes', type: 'bytes', indexed: false }],
    name: 'logs',
  },
  {
    type: 'error',
    inputs: [{ name: 'inputType', internalType: 'enum ETypes', type: 'uint8' }],
    name: 'UnsupportedTypeInput',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TestUtils
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const testUtilsAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [],
    name: 'IS_TEST',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeArtifacts',
    outputs: [{ name: 'excludedArtifacts_', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeContracts',
    outputs: [{ name: 'excludedContracts_', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSelectors',
    outputs: [
      {
        name: 'excludedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'excludeSenders',
    outputs: [{ name: 'excludedSenders_', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'failed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifactSelectors',
    outputs: [
      {
        name: 'targetedArtifactSelectors_',
        internalType: 'struct StdInvariant.FuzzArtifactSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'artifact', internalType: 'string', type: 'string' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetArtifacts',
    outputs: [{ name: 'targetedArtifacts_', internalType: 'string[]', type: 'string[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetContracts',
    outputs: [{ name: 'targetedContracts_', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetInterfaces',
    outputs: [
      {
        name: 'targetedInterfaces_',
        internalType: 'struct StdInvariant.FuzzInterface[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'artifacts', internalType: 'string[]', type: 'string[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSelectors',
    outputs: [
      {
        name: 'targetedSelectors_',
        internalType: 'struct StdInvariant.FuzzSelector[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'selectors', internalType: 'bytes4[]', type: 'bytes4[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'targetSenders',
    outputs: [{ name: 'targetedSenders_', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'string', type: 'string', indexed: false }],
    name: 'log',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'address', type: 'address', indexed: false }],
    name: 'log_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'val', internalType: 'uint256[]', type: 'uint256[]', indexed: false }],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'val', internalType: 'int256[]', type: 'int256[]', indexed: false }],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'val', internalType: 'address[]', type: 'address[]', indexed: false }],
    name: 'log_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'bytes', type: 'bytes', indexed: false }],
    name: 'log_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32', indexed: false }],
    name: 'log_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'int256', type: 'int256', indexed: false }],
    name: 'log_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'log_named_address',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256[]', type: 'uint256[]', indexed: false },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256[]', type: 'int256[]', indexed: false },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'address[]', type: 'address[]', indexed: false },
    ],
    name: 'log_named_array',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'log_named_bytes',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'log_named_bytes32',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
      { name: 'decimals', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_decimal_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'decimals', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_decimal_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'int256', type: 'int256', indexed: false },
    ],
    name: 'log_named_int',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'log_named_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'key', internalType: 'string', type: 'string', indexed: false },
      { name: 'val', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'log_named_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'string', type: 'string', indexed: false }],
    name: 'log_string',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256', indexed: false }],
    name: 'log_uint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '', internalType: 'bytes', type: 'bytes', indexed: false }],
    name: 'logs',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TrivialEncryption
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const trivialEncryptionAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'allow',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'allowTransient',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'allowedTransient',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'bool', type: 'bool' }],
    name: 'asEbool',
    outputs: [{ name: 'newEbool', internalType: 'ebool', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'asEuint256',
    outputs: [{ name: 'newEuint256', internalType: 'euint256', type: 'bytes32' }],
    stateMutability: 'nonpayable',
  },
  { type: 'function', inputs: [], name: 'cleanTransientStorage', outputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [],
    name: 'getEventCounter',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'ciphertext', internalType: 'bytes', type: 'bytes' },
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'contractAddress', internalType: 'address', type: 'address' },
      { name: 'inputType', internalType: 'enum ETypes', type: 'uint8' },
    ],
    name: 'getInputHandle',
    outputs: [{ name: 'generatedHandle', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'op', internalType: 'enum EOps', type: 'uint8' },
      { name: 'returnType', internalType: 'enum ETypes', type: 'uint8' },
      { name: 'value', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getOpResultHandle',
    outputs: [{ name: 'generatedHandle', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'op', internalType: 'enum EOps', type: 'uint8' },
      { name: 'returnType', internalType: 'enum ETypes', type: 'uint8' },
      { name: 'inputA', internalType: 'bytes32', type: 'bytes32' },
      { name: 'inputB', internalType: 'bytes32', type: 'bytes32' },
      { name: 'inputC', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getOpResultHandle',
    outputs: [{ name: 'generatedHandle', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'op', internalType: 'enum EOps', type: 'uint8' },
      { name: 'returnType', internalType: 'enum ETypes', type: 'uint8' },
      { name: 'counter', internalType: 'uint256', type: 'uint256' },
      { name: 'upperBound', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getOpResultHandle',
    outputs: [{ name: 'generatedHandle', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'op', internalType: 'enum EOps', type: 'uint8' },
      { name: 'returnType', internalType: 'enum ETypes', type: 'uint8' },
      { name: 'lhs', internalType: 'bytes32', type: 'bytes32' },
      { name: 'rhs', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'getOpResultHandle',
    outputs: [{ name: 'generatedHandle', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'plaintextBytes', internalType: 'bytes32', type: 'bytes32' },
      { name: 'handleType', internalType: 'enum ETypes', type: 'uint8' },
    ],
    name: 'getTrivialEncryptHandle',
    outputs: [{ name: 'generatedHandle', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'isAllowed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'persistAllowed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'result', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'plainTextBytes', internalType: 'bytes32', type: 'bytes32', indexed: false },
      { name: 'handleType', internalType: 'enum ETypes', type: 'uint8', indexed: false },
      { name: 'eventId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'TrivialEncrypt',
  },
  {
    type: 'error',
    inputs: [
      { name: 'handle', internalType: 'bytes32', type: 'bytes32' },
      { name: 'sender', internalType: 'address', type: 'address' },
    ],
    name: 'SenderNotAllowedForHandle',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// UUPSUpgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const uupsUpgradeableAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'UPGRADE_INTERFACE_VERSION',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'implementation', internalType: 'address', type: 'address', indexed: true }],
    name: 'Upgraded',
  },
  { type: 'error', inputs: [{ name: 'target', internalType: 'address', type: 'address' }], name: 'AddressEmptyCode' },
  {
    type: 'error',
    inputs: [{ name: 'implementation', internalType: 'address', type: 'address' }],
    name: 'ERC1967InvalidImplementation',
  },
  { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
  { type: 'error', inputs: [], name: 'FailedCall' },
  { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
  {
    type: 'error',
    inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
    name: 'UUPSUnsupportedProxiableUUID',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Version
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const versionAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_majorVersion', internalType: 'uint8', type: 'uint8' },
      { name: '_minorVersion', internalType: 'uint8', type: 'uint8' },
      { name: '_patchVersion', internalType: 'uint8', type: 'uint8' },
      { name: '_salt', internalType: 'bytes32', type: 'bytes32' },
      { name: '_name', internalType: 'string', type: 'string' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getName',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getVersion',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getVersionedName',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'majorVersion',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'minorVersion',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'patchVersion',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'salt',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  { type: 'error', inputs: [{ name: 'str', internalType: 'string', type: 'string' }], name: 'StringTooLong' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// stdError
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stdErrorAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'arithmeticError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'assertionError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'divisionError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'encodeStorageError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'enumConversionError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'indexOOBError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'memOverflowError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'popError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'zeroVarError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// stdStorageSafe
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stdStorageSafeAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'who', internalType: 'address', type: 'address', indexed: false },
      { name: 'fsig', internalType: 'bytes4', type: 'bytes4', indexed: false },
      { name: 'keysHash', internalType: 'bytes32', type: 'bytes32', indexed: false },
      { name: 'slot', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'SlotFound',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'who', internalType: 'address', type: 'address', indexed: false },
      { name: 'slot', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'WARNING_UninitedSlot',
  },
] as const
