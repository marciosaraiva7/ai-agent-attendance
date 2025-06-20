// Helper to call the server
export async function callChatAPI(message: string, conversationId: string) {
  try {
    const res = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ conversation_id: conversationId, message }),
    });
    if (!res.ok) {
      return { error: `Chat API error: ${res.status}` };
    }
    const data = await res.json();
    return { data };
  } catch (err) {
    console.error("Error sending message:", err);
    const message = err instanceof Error ? err.message : String(err);
    return { error: message };
  }
}
