let mapluis: google.maps.Map;

function initMap1(): void {
    mapluis = new google.maps.Map(document.getElementById("map1") as HTMLElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}
