import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const IssuesPage = () => {
  return (
    <div>
      <Button>
        <Link href="/issues/new">新建问题</Link>
      </Button>
    </div>
  );
};

export default IssuesPage;
