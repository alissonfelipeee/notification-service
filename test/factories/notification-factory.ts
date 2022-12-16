import { Notification, NotificationsProps } from '@app/entities/notification';
import { Content } from '@app/entities/notification-content';

type Override = Partial<NotificationsProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    recipientId: '123',
    content: new Content('Your order has been shipped'),
    category: 'order',
    ...override,
  });
}
