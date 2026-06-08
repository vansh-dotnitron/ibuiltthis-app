export type ProductType = {
  id: number;
  name: string;
  slug: string;
  tagline?: string | null;
  description?: string | null;
  websiteUrl?: string | null;
  tags?: string[] | null;
  voteCount: number;
  createdAt?: Date | null;
  approvedAt?: Date | null;
  status?: string | null;
  submittedBy?: string | null;
  userId?: string | null;
  organizationId?: string | null;
};

export type FormState = {
  success: boolean;
  errors?: Record<string, string[]>;
  message: string;
};