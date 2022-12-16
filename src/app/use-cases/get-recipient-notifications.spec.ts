import { GetRecipientNotifications } from '@app/use-cases/get-recipient-notifications';
import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';

describe('Get recipient notifications', () => {
  it('should be able to recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: '123',
      }),
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: '123',
      }),
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: '12345',
      }),
    );

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: '123',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: '123' }),
        expect.objectContaining({ recipientId: '123' }),
      ]),
    );
  });
});
