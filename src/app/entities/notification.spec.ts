import { Notification } from './notification';
import { Content } from './notification-content';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      recipientId: '123',
      content: new Content('Your order has been shipped'),
      category: 'order',
    });
    expect(notification).toBeTruthy();
  });
});
