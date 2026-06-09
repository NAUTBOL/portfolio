import { siteConfig } from '../config/site';

/**
 * Posts a plain message to the configured Discord webhook.
 * No-ops silently when no webhook is configured or the request fails —
 * logging must never break the page.
 */
export const logToDiscord = async (content: string): Promise<void> => {
  const url = siteConfig.discordWebhookUrl;
  if (!url) return;

  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    });
  } catch {
    // Intentionally ignored — observability must not affect UX.
  }
};
