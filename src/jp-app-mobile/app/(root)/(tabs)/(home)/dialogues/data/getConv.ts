import { ConversationDTO } from "../ConversationDTO";
import yutaConv_1_1 from "./yuta/1_1";
import yutaConv_n_n from "./yuta/n_n";

export const yutaConversations_1: Record<string, ConversationDTO> = {
  "a1b2c3d4-e5f6-7890-1234-567890abcdef": yutaConv_1_1,
  "550e8400-e29b-41d4-a716-446655440000": yutaConv_n_n,
};

function getYutaConv(id: string) {
  return yutaConversations_1[id];
}

export const publicConversations_1: Record<string, ConversationDTO> = {};

function getPublicConv(id: string) {
  return publicConversations_1[id];
}

export default function getConversation(id: string) {
  const conv = getPublicConv(id);
  if (conv !== undefined) return conv;

  return getYutaConv(id);
}

export function getProject(projectId: string) {
  if (projectId === "yuta")
    return { id: "yuta", name: "Yuta Vocabulary Course" };

  if (projectId === "public")
    return { id: "public", name: "Public Conversations" };
}

export function getProjectCollections(projectId: string) {
  if (projectId === "yuta") return [getCollection("yuta-1")];
  if (projectId === "public") return [getCollection("public-1")];
}

export function getCollection(collectionId: string) {
  if (collectionId === "yuta-1")
    return { id: "yuta-1", name: "Level 1 - 250 Words" };
  if (collectionId === "public-1")
    return { id: "public-1", name: "Public Conversations" };

  return { id: "", name: "" };
}

export function getCollectionConversations(collectionId: string) {
  if (collectionId === "yuta-1") return yutaConversations_1;
  if (collectionId === "public-1") return publicConversations_1;
}
