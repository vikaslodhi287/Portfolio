import api from "../axios";

export async function getNavigation() {
  const response = await api.get("/navigation");

  return response.data.data.map((item) => ({
    id: item._id,
    label: item.title,
    href: item.path,
    slug: item.slug,
    order: item.displayOrder,
    visible: item.isVisible,
    icon: item.icon,
  }));
}