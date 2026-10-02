import PropertyDetailPage, {
  generateMetadata as generatePropertyMetadata,
  generateStaticParams as generatePropertyStaticParams,
} from "@/app/properties/[id]/page";

export const generateStaticParams = generatePropertyStaticParams;
export const generateMetadata = generatePropertyMetadata;

export default PropertyDetailPage;
