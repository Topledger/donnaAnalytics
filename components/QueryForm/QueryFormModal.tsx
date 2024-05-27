"use client";

import dynamic from "next/dynamic";
import { WrapModal } from "../Modal";

const QueryForm = dynamic(
  () => import(/** webackChunkName: "QueryForm" */ "@/components/QueryForm"),
  {
    ssr: false,
  }
);

const QueryFormModal = WrapModal("query-form", QueryForm);

export default QueryFormModal;
