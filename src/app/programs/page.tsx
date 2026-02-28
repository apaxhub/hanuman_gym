import { Metadata } from "next";
import { siteData } from "@/data/siteData";
import ProgramsContent from "./ProgramsContent";

export const metadata: Metadata = {
    title: "Programs & Memberships | " + siteData.global.gymName,
};

export default function ProgramsPage() {
    return <ProgramsContent />;
}
