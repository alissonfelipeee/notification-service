import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipient notifications', () => {
  it('should be able to count recipient notifiacitons', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: '123' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: '123' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: '1234' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: '123',
    });

    expect(count).toEqual(2);
  });
});
