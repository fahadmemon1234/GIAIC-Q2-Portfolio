import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

interface TrackingResponse {
  tracking_number: string;
  status_description: string;
  estimated_delivery_date: string;
  carrier_detail: {
    name: string;
  };
  events: {
    description: string;
    occurred_at: string;
    location: {
      city: string;
      state: string;
      country: string;
    };
  }[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { trackingNumber } = req.body;

    if (!trackingNumber) {
      return res.status(400).json({ error: 'Tracking number is required' });
    }

    try {
      const response = await axios.get<TrackingResponse>(
        `https://api.shipengine.com/v1/tracking?tracking_number=${trackingNumber}`,
        {
          headers: {
            'API-Key': process.env.NEXT_PUBLIC_SHIPENGINE_API_KEY!,
          },
        }
      );
      res.status(200).json(response.data);
    } catch (error: any) {
      res
        .status(error.response?.status || 500)
        .json({ error: error.response?.data || error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}
