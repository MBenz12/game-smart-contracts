export type AnchorRaffleTicket = {
  "version": "0.1.0",
  "name": "anchor_raffle_ticket",
  "instructions": [
    {
      "name": "initializeVault",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "vaultPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultPoolSktAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sktMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedToken",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenType",
          "type": "publicKey"
        },
        {
          "name": "vaultBump",
          "type": "u8"
        }
      ],
      "returns": null
    },
    {
      "name": "withdrawVault",
      "accounts": [
        {
          "name": "claimer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "claimerSktAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sktMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultPoolSktAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [],
      "returns": null
    },
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "senderTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recipientTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenSplAddress",
          "type": "publicKey"
        },
        {
          "name": "ticketPrice",
          "type": "u64"
        },
        {
          "name": "amount",
          "type": "u32"
        }
      ],
      "returns": null
    },
    {
      "name": "buyTicketSol",
      "accounts": [
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "recipient",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u32"
        },
        {
          "name": "ticketPrice",
          "type": "u64"
        },
        {
          "name": "tokenSplAddress",
          "type": "publicKey"
        }
      ],
      "returns": null
    },
    {
      "name": "buyTicketSpl",
      "accounts": [
        {
          "name": "sender",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "senderTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recipientTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u32"
        },
        {
          "name": "ticketPrice",
          "type": "u64"
        },
        {
          "name": "tokenSplAddress",
          "type": "publicKey"
        }
      ],
      "returns": null
    },
    {
      "name": "transferSplToken",
      "accounts": [
        {
          "name": "sender",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "senderTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recipientTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [],
      "returns": null
    }
  ],
  "accounts": [
    {
      "name": "vault",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenType",
            "type": "publicKey"
          },
          {
            "name": "vaultBump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "raffle",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalTickets",
            "type": "u32"
          },
          {
            "name": "soldTickets",
            "type": "u32"
          },
          {
            "name": "pricePerTicket",
            "type": "u64"
          },
          {
            "name": "tokenSplAddress",
            "type": "publicKey"
          },
          {
            "name": "buyers",
            "type": {
              "vec": {
                "defined": "Buyer"
              }
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Buyer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "key",
            "type": "publicKey"
          },
          {
            "name": "tickets",
            "type": "u32"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "BuyEvent",
      "fields": [
        {
          "name": "buyer",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u32",
          "index": false
        },
        {
          "name": "soldTickets",
          "type": "u32",
          "index": false
        },
        {
          "name": "totalTickets",
          "type": "u32",
          "index": false
        },
        {
          "name": "remainingTickets",
          "type": "u32",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "NoTicketsLeft",
      "msg": "No more tickets left for purchase."
    },
    {
      "code": 6001,
      "name": "RafflePriceMismatched",
      "msg": "Raffle price mismatched."
    },
    {
      "code": 6002,
      "name": "RaffleTokenSPLAddressMismatched",
      "msg": "Token Address mismatched."
    },
    {
      "code": 6003,
      "name": "NotEnoughTokens",
      "msg": "Not Enough Tokens."
    },
    {
      "code": 6004,
      "name": "ErrorCustom",
      "msg": "Custom Error."
    }
  ]
};

export const IDL: AnchorRaffleTicket = {
  "version": "0.1.0",
  "name": "anchor_raffle_ticket",
  "instructions": [
    {
      "name": "initializeVault",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "vaultPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultPoolSktAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sktMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedToken",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenType",
          "type": "publicKey"
        },
        {
          "name": "vaultBump",
          "type": "u8"
        }
      ],
      "returns": null
    },
    {
      "name": "withdrawVault",
      "accounts": [
        {
          "name": "claimer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "claimerSktAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "sktMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultPoolSktAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [],
      "returns": null
    },
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "senderTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recipientTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "tokenSplAddress",
          "type": "publicKey"
        },
        {
          "name": "ticketPrice",
          "type": "u64"
        },
        {
          "name": "amount",
          "type": "u32"
        }
      ],
      "returns": null
    },
    {
      "name": "buyTicketSol",
      "accounts": [
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "recipient",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u32"
        },
        {
          "name": "ticketPrice",
          "type": "u64"
        },
        {
          "name": "tokenSplAddress",
          "type": "publicKey"
        }
      ],
      "returns": null
    },
    {
      "name": "buyTicketSpl",
      "accounts": [
        {
          "name": "sender",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "senderTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recipientTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u32"
        },
        {
          "name": "ticketPrice",
          "type": "u64"
        },
        {
          "name": "tokenSplAddress",
          "type": "publicKey"
        }
      ],
      "returns": null
    },
    {
      "name": "transferSplToken",
      "accounts": [
        {
          "name": "sender",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "senderTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recipientTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [],
      "returns": null
    }
  ],
  "accounts": [
    {
      "name": "vault",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenType",
            "type": "publicKey"
          },
          {
            "name": "vaultBump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "raffle",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "totalTickets",
            "type": "u32"
          },
          {
            "name": "soldTickets",
            "type": "u32"
          },
          {
            "name": "pricePerTicket",
            "type": "u64"
          },
          {
            "name": "tokenSplAddress",
            "type": "publicKey"
          },
          {
            "name": "buyers",
            "type": {
              "vec": {
                "defined": "Buyer"
              }
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "Buyer",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "key",
            "type": "publicKey"
          },
          {
            "name": "tickets",
            "type": "u32"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "BuyEvent",
      "fields": [
        {
          "name": "buyer",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u32",
          "index": false
        },
        {
          "name": "soldTickets",
          "type": "u32",
          "index": false
        },
        {
          "name": "totalTickets",
          "type": "u32",
          "index": false
        },
        {
          "name": "remainingTickets",
          "type": "u32",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "NoTicketsLeft",
      "msg": "No more tickets left for purchase."
    },
    {
      "code": 6001,
      "name": "RafflePriceMismatched",
      "msg": "Raffle price mismatched."
    },
    {
      "code": 6002,
      "name": "RaffleTokenSPLAddressMismatched",
      "msg": "Token Address mismatched."
    },
    {
      "code": 6003,
      "name": "NotEnoughTokens",
      "msg": "Not Enough Tokens."
    },
    {
      "code": 6004,
      "name": "ErrorCustom",
      "msg": "Custom Error."
    }
  ]
};