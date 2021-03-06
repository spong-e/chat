"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Chat_1 = require("../entities/Chat");
const chats = [];
const channel = "CHAT_CHANNEL";
let ChatResolver = class ChatResolver {
    getChats() {
        return chats;
    }
    async createChat(pubSub, name, message) {
        const chat = { id: chats.length + 1, name, message };
        chats.push(chat);
        const payload = chat;
        await pubSub.publish(channel, payload);
        return chat;
    }
    messageSent({ id, name, message }) {
        return { id, name, message };
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Chat_1.Chat]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ChatResolver.prototype, "getChats", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Chat_1.Chat),
    __param(0, (0, type_graphql_1.PubSub)()),
    __param(1, (0, type_graphql_1.Arg)("name")),
    __param(2, (0, type_graphql_1.Arg)("message")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [type_graphql_1.PubSubEngine, String, String]),
    __metadata("design:returntype", Promise)
], ChatResolver.prototype, "createChat", null);
__decorate([
    (0, type_graphql_1.Subscription)({ topics: channel }),
    __param(0, (0, type_graphql_1.Root)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Chat_1.Chat]),
    __metadata("design:returntype", Chat_1.Chat)
], ChatResolver.prototype, "messageSent", null);
ChatResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], ChatResolver);
exports.ChatResolver = ChatResolver;
//# sourceMappingURL=chat.js.map