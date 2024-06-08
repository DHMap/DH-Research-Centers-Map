ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-149.287080, -78.907763, 161.443806, 86.815377]);
var wms_layers = [];


        var lyr_ESRIPhysical_0 = new ol.layer.Tile({
            'title': 'ESRI Physical',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_DigitalHumanitiesCenters_1 = new ol.format.GeoJSON();
var features_DigitalHumanitiesCenters_1 = format_DigitalHumanitiesCenters_1.readFeatures(json_DigitalHumanitiesCenters_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DigitalHumanitiesCenters_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DigitalHumanitiesCenters_1.addFeatures(features_DigitalHumanitiesCenters_1);
var lyr_DigitalHumanitiesCenters_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DigitalHumanitiesCenters_1, 
                style: style_DigitalHumanitiesCenters_1,
                popuplayertitle: "Digital Humanities Centers",
                interactive: true,
                    title: '<img src="styles/legend/DigitalHumanitiesCenters_1.png" /> Digital Humanities Centers'
                });

lyr_ESRIPhysical_0.setVisible(true);lyr_DigitalHumanitiesCenters_1.setVisible(true);
var layersList = [lyr_ESRIPhysical_0,lyr_DigitalHumanitiesCenters_1];
lyr_DigitalHumanitiesCenters_1.set('fieldAliases', {'Name': 'Name', 'Number': 'Number', 'Istitution': 'Istitution', 'City': 'City', 'Country': 'Country', 'Country_1': 'Country_1', 'field_7': 'field_7', 'Adress': 'Adress', 'Year': 'Year', 'Site': 'Site', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_DigitalHumanitiesCenters_1.set('fieldImages', {'Name': 'TextEdit', 'Number': 'Range', 'Istitution': 'TextEdit', 'City': 'TextEdit', 'Country': 'TextEdit', 'Country_1': 'TextEdit', 'field_7': 'TextEdit', 'Adress': 'TextEdit', 'Year': 'TextEdit', 'Site': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_DigitalHumanitiesCenters_1.set('fieldLabels', {'Name': 'header label - visible with data', 'Number': 'hidden field', 'Istitution': 'inline label - always visible', 'City': 'inline label - always visible', 'Country': 'inline label - always visible', 'Country_1': 'hidden field', 'field_7': 'hidden field', 'Adress': 'hidden field', 'Year': 'inline label - always visible', 'Site': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_DigitalHumanitiesCenters_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});