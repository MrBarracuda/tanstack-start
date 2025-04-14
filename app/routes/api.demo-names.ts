import { createAPIFileRoute } from '@tanstack/react-start/api';

export const APIRoute = createAPIFileRoute('/api/demo-names')({
  // biome-ignore lint/suspicious/useAwait: <explanation>
  GET: async ({ request: _request }) => {
    return new Response(JSON.stringify(['Alice', 'Bob', 'Charlie']), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
});
