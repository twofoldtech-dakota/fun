"use client";

import { Container } from "../../components/container";
import { PageWrapper } from "../../components/page-wrapper";

export default function Home() {
  return (
    <PageWrapper title="Dashboard" className="overflow-hidden ltmd:pt-4 md:p-6">
      <Container className="flex w-full rounded-lg border-lighter_black p-6 md:border">
        <div className="">Balance</div>
      </Container>
    </PageWrapper>
  );
}
