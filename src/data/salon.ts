export const salon = {
    name: "G Cube Salon",
    locality: "Thirubuvanam, Kumbakonam",
    address: "No. 12, East Main Street, Kumbakonam - 612001", // placeholder: replace with the real address
    phone: "+91 84383 28069",
    phoneHref: "tel:+918438328069",
    whatsapp: "918438328069",
    hours: "9:00 AM – 9:00 PM",
};

export const whatsappLink = (message: string) =>
    `https://wa.me/${salon.whatsapp}?text=${encodeURIComponent(message)}`;