/**
 * @author chrellrich [c.ellrich@ellri.ch]
 * @copyright Crown Copyright 2025
 * @license Apache-2.0
 */

import Operation from "../Operation.mjs";
import OperationError from "../errors/OperationError.mjs";

/**
 * Shamirs Secret Sharing operation
 */
class ShamirsSecretSharing extends Operation {

    /**
     * ShamirsSecretSharing constructor
     */
    constructor() {
        super();

        this.name = "Shamirs Secret Sharing";
        this.module = "Crypto";
        this.description = "Splits a secret into multiple shares where t of n are needed to reconstruct the secret.";
        this.infoURL = "https://wikipedia.org/wiki/Shamir%27s_secret_sharing"; // Usually a Wikipedia link. Remember to remove localisation (i.e. https://wikipedia.org/etc rather than https://en.wikipedia.org/etc)
        this.inputType = "string";
        this.outputType = "string";
        this.args = [
            /* Example arguments. See the project wiki for full details.
            {
                name: "First arg",
                type: "string",
                value: "Don't Panic"
            },
            {
                name: "Second arg",
                type: "number",
                value: 42
            }
            */
        ];
    }

    /**
     * @param {string} input
     * @param {Object[]} args
     * @returns {string}
     */
    run(input, args) {
        // const [firstArg, secondArg] = args;

        throw new OperationError("Test");
    }

}

export default ShamirsSecretSharing;
