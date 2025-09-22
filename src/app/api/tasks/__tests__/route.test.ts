import { createMocks } from 'node-mocks-http';
import { GET } from '../route';

describe('Task API', () => {
  it('should return 401 if not authenticated on GET', async () => {
    // Mock getServerSession to return null (unauthenticated)
    const response = await GET();
    expect(response.status).toBe(401);
  });

  // Add more tests for authenticated GET, POST, etc. as needed
});
