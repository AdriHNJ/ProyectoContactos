import DataSource from "devextreme/data/data_source";

export const dataSourceTemas = new DataSource({
    store: {
        data: [
            {
                ID: "generic.light",
                Name: "light",
            },
            {
                ID: "generic.dark",
                Name: "dark",
            },
            {
                ID: "generic.carmine",
                Name: "carmine",
            },
            {
                ID: "generic.softblue",
                Name: "softblue",
            },
            {
                ID: "generic.darkmoon",
                Name: "darkmoon",
            },
            {
                ID: "generic.darkviolet",
                Name: "darkviolet",
            },
            {
                ID: "generic.greenmist",
                Name: "greenmist",
            },
            {
                ID: "generic.contrast",
                Name: "contrast",
            },
            {
                ID: "generic.light.compact",
                Name: "light compact",
            },
            {
                ID: "generic.dark.compact",
                Name: "dark compact",
            },
            {
                ID: "generic.carmine.compact",
                Name: "carmine compact",
            },
            {
                ID: "generic.softblue.compact",
                Name: "softblue compact",
            },
            {
                ID: "generic.darkmoon.compact",
                Name: "darkmoon compact",
            },
            {
                ID: "generic.darkviolet.compact",
                Name: "darkviolet compact",
            },
            {
                ID: "generic.greenmist.compact",
                Name: "greenmist compact",
            },
            {
                ID: "generic.contrast.compact",
                Name: "contrast compact",
            },
            {
                ID: "material.blue.light",
                Name: "material blue light",
            },
            {
                ID: "material.blue.dark",
                Name: "material blue dark",
            },
            {
                ID: "material.lime.light",
                Name: "material lime light",
            },
            {
                ID: "material.lime.dark",
                Name: "material lime dark",
            },
            {
                ID: "material.orange.light",
                Name: "material orange light",
            },
            {
                ID: "material.orange.dark",
                Name: "material orange dark",
            },
            {
                ID: "material.purple.light",
                Name: "material purple light",
            },
            {
                ID: "material.purple.dark",
                Name: "material purple dark",
            },
            {
                ID: "material.teal.light",
                Name: "material teal light",
            },
            {
                ID: "material.teal.dark",
                Name: "material teal dark",
            },
            {
                ID: "material.blue.light.compact",
                Name: "material blue light compact",
            },
            {
                ID: "material.blue.dark.compact",
                Name: "material blue dark compact",
            },
            {
                ID: "material.lime.light.compact",
                Name: "material lime light compact",
            },
            {
                ID: "material.lime.dark.compact",
                Name: "material lime dark compact",
            },
            {
                ID: "material.orange.light.compact",
                Name: "material orange light compact",
            },
            {
                ID: "material.orange.dark.compact",
                Name: "material orange dark compact",
            },
            {
                ID: "material.purple.light.compact",
                Name: "material purple light compact",
            },

            {
                ID: "material.purple.light.compact",
                Name: "material purple light compact",
            },
            {
                ID: "material.purple.dark.compact",
                Name: "material purple dark compact",
            },
            {
                ID: "material.teal.light.compact",
                Name: "material teal light compact",
            },
            {
                ID: "material.teal.dark.compact",
                Name: "material teal dark compact",
            },
        ],
        type: "array",
        key: "ID",
    },
});


const menuItems: any[] = [
    {
        name: "Acerca de",
        /* disabled: true, */
        /*    items: [
               {
                   name: "Política de privacidad y cookies",
                   url:
                       usuarioState!.user?.Configuracion.LinkCookies === null
                           ? ""
                           : usuarioState!.user?.Configuracion.LinkCookies,
               },
               {
                   name: " Aviso Legal",
                   url:
                       usuarioState!.user?.Configuracion.LinkCookies === null
                           ? ""
                           : usuarioState!.user?.Configuracion.LinkCookies,
               },
               {
                   name: "Reglamento General de Protección de Datos",
                   url:
                       usuarioState!.user?.Configuracion.LinkCookies === null
                           ? ""
                           : usuarioState!.user?.Configuracion.LinkCookies,
               },
           ], */
    },
];

export function getTimeLogIn() {
    var d = new Date();
    var horaInicioSesion =
        ("0" + d.getDate()).slice(-2) +
        "-" +
        ("0" + (d.getMonth() + 1)).slice(-2) +
        "-" +
        d.getFullYear() +
        " " +
        ("0" + d.getHours()).slice(-2) +
        ":" +
        ("0" + d.getMinutes()).slice(-2);
    return horaInicioSesion;
}

export const myEvent = (itemData: any, history: any) => {
    if (itemData.url != undefined) {
        window.open(itemData.url, "_blank");
        // window.location.href = itemData.url;
    } else {
        history.push(itemData.page);
    }
};