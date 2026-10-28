/**
 * Verified achievements. Leave EMPTY until the institute supplies official data.
 * Example entry (do not add unless verified):
 *   { year: "2025", title: "Board Examination", detail: "Student X scored Y%", source: "Official marksheet" }
 */
export type Achievement = { year: string; title: string; detail: string; source: string };

export const achievements: Achievement[] = [];
