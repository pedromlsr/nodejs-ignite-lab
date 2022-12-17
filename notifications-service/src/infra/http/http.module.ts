import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";

import { NotificationsController } from "./controllers/notifications.controller";

import { CancelNotification } from "@application/use-cases/cancel-notification";
import { ReadNotification } from "@application/use-cases/read-notification";
import { UnreadNotification } from "@application/use-cases/unread-notification";
import { CountRecipientNotifications } from "@application/use-cases/count-recipient-notifications";
import { GetRecipientNotifications } from "@application/use-cases/get-recipient-notifications";
import { SendNotification } from "@application/use-cases/send-notification";

@Module({
    imports: [DatabaseModule],
    controllers: [NotificationsController],
    providers: [
        CancelNotification,
        ReadNotification,
        UnreadNotification,
        CountRecipientNotifications,
        GetRecipientNotifications,
        SendNotification
    ]
})



export class HttpModule { }