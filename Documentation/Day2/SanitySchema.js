export default {
    name: 'product',
    type: 'document',
    fields: [
      {
        name: 'customer',
        type: 'object',
        title: 'Customer Details',
        fields: [
          { name: 'name', type: 'string', title: 'Name' },
          { name: 'email', type: 'string', title: 'Email' },
          { name: 'phone', type: 'string', title: 'Phone' }
        ]
      },
      {
        name: 'shippingAddress',
        type: 'object',
        title: 'Shipping Address',
        fields: [
          { name: 'addressLine', type: 'string', title: 'Address Line' },
          { name: 'city', type: 'string', title: 'City' },
          { name: 'postalCode', type: 'string', title: 'Postal Code' },
          { name: 'country', type: 'string', title: 'Country' }
        ]
      },
      {
        name: 'products',
        type: 'array',
        title: 'Products',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'productId', type: 'string', title: 'Product ID' },
              { name: 'productName', type: 'string', title: 'Product Name' },
              { name: 'quantity', type: 'number', title: 'Quantity' },
              { name: 'price', type: 'number', title: 'Price' }
            ]
          }
        ]
      },
      {
        name: 'payment',
        type: 'object',
        title: 'Payment Details',
        fields: [
          { name: 'method', type: 'string', title: 'Payment Method' },
          { name: 'status', type: 'string', title: 'Payment Status' }
        ]
      },
      {
        name: 'totals',
        type: 'object',
        title: 'Order Totals',
        fields: [
          { name: 'subtotal', type: 'number', title: 'Subtotal' },
          { name: 'shippingCost', type: 'number', title: 'Shipping Cost' },
          { name: 'total', type: 'number', title: 'Total' }
        ]
      },
      {
        name: 'orderDate',
        type: 'datetime',
        title: 'Order Date'
      },
      {
        name: 'status',
        type: 'string',
        title: 'Order Status',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Processing', value: 'processing' },
            { title: 'Completed', value: 'completed' },
            { title: 'Cancelled', value: 'cancelled' }
          ]
        }
      }
    ]
  };
  