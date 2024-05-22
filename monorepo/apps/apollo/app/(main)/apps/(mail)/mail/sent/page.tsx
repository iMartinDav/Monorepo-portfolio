"use client";

import React, { Suspense, useContext, useEffect, useState } from "react";
import type { Demo, Page } from "@/types";
import AppMailTable from "../../../../../../demo/components/apps/mail/AppMailTable";
import { MailContext } from "../../../../../../demo/components/apps/mail/context/mailcontext";
import { useSearchParams } from "next/navigation";

const MailSent: Page = () => {
    const [sentMails, setSentMails] = useState<Demo.Mail[]>([]);
    const { mails } = useContext(MailContext);
    const searchParams = useSearchParams(); // Assuming you use this hook

    useEffect(() => {
        const _mails = mails.filter((d) => d.sent && !d.trash && !d.archived);
        setSentMails(_mails);
    }, [mails]);

    return (
        <React.Fragment>
            <AppMailTable mails={sentMails} />
        </React.Fragment>
    );
};

// Wrapping MailSent with Suspense
const MailSentWithSuspense = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <MailSent />
    </Suspense>
);

export default MailSentWithSuspense;
