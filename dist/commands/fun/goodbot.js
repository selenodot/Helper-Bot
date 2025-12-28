"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const nhandler_1 = require("nhandler");
const index_1 = require("../../index");
const util_1 = require("../../util");
class default_1 extends util_1.BaseCommand {
    name = "good bot";
    description = "Tell the bot how good they are.";
    metadata = {
        category: "Messages",
    };
    integrationTypes = [0, 1];
    contexts = [0, 1, 2];
    async run(interaction) {

        try {
            await interaction.reply({ content: "woag, thank you :3" });
        }
        catch (err) {
            throw new nhandler_1.ExecutionError(`Failed to send text.\n${err.message}`);
        }
    }
}
exports.default = default_1;
//# sourceMappingURL=say.js.map