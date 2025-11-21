import { useParams } from "wouter";
import StateLocationPageTemplate from "./StateLocationPageTemplate";
import { getStateBySlug } from "@/data/all50states";
import NotFound from "@/pages/not-found";

export default function DynamicStatePage() {
  const params = useParams<{ slug: string }>();
  const stateSlug = params.slug?.replace("-golf-carts", "") || "";
  
  const state = getStateBySlug(stateSlug);
  
  if (!state) {
    return <NotFound />;
  }
  
  return <StateLocationPageTemplate state={state} />;
}
