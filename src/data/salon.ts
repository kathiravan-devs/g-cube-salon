export const salon = {
    name: "G Cube Salon",
    locality: "Thirubuvanam, Kumbakonam",
    address: "No. 12, East Main Street, Kumbakonam - 612001", // TODO: verify the exact customer-facing address before launch.
    phone: "+91 84383 28069",
    phoneHref: "tel:+918438328069",
    landmark: "Thirubuvanam Bus Stand",
    mapsUrl: "https://www.google.com/maps/place/G+Cube+Salon/@10.9914168,79.4336236,13.38z/data=!4m14!1m7!3m6!1s0x3a552d187bf0cd91:0x3c8272570ac21e38!2sG+Cube+Salon!8m2!3d10.9907685!4d79.4403464!16s%2Fg%2F11w435yljs!3m5!1s0x3a552d187bf0cd91:0x3c8272570ac21e38!8m2!3d10.9907685!4d79.4403464!16s%2Fg%2F11w435yljs?entry=ttu&g_ep=EgoyMDI2MTEwNC4wIKXMDSoASAFQAw%3D%3D",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15666.609416574342!2d79.4297248!3d10.9895915!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a552d187bf0cd91%3A0x3c8272570ac21e38!2sG%20Cube%20Salon!5e0!3m2!1sen!2sin!4v1794246574987!5m2!1sen!2sin",
    whatsapp: "918438328069",
    hours: "9:00 AM – 9:00 PM",
    hoursNote: "Mon – Sun", // TODO: confirm opening days before launch.
    closedWeekdays: [] as number[], // 0 = Sunday ... 6 = Saturday.
    // Keep these empty until the salon's real profile URLs are confirmed.
    social: {
        instagram: "",
        facebook: "",
    },
};

export const whatsappLink = (message: string) =>
    `https://wa.me/${salon.whatsapp}?text=${encodeURIComponent(message)}`;
