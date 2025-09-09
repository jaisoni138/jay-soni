import React, { useContext } from "react";
import AppMenuitem from "./AppMenuitem";
import { LayoutContext } from "./context/layoutcontext";
import { MenuProvider } from "./context/menucontext";
import Link from "next/link";
import { useSelector } from "react-redux";
// import Image from "next/image";

const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);
    const user = useSelector((state) => state.initialState.user);

    const model = [
        {
            label: "Home",
            items: [
                {
                    label: "Dashboard",
                    icon: "pi pi-fw pi-home",
                    to: "/dashboard",
                    visible: user.role === "SUPER_ADMIN" ? true : false,
                },
                { label: "Clients", icon: "pi pi-fw pi-users", to: "/clients" },
                {
                    label: "Locations",
                    icon: "pi pi-fw pi-map-marker",
                    to: "/locations",
                },
            ],
        },
        {
            label: "Order",
            items: [
                {
                    label: "Open Orders",
                    icon: "pi pi-fw pi-list",
                    to: "/open-orders",
                },
                {
                    label: "Completed Orders",
                    icon: "pi pi-fw pi-list-check",
                    to: "/completed-orders",
                },
                {
                    label: "Canceled Orders",
                    icon: "pi pi-fw pi-cart-minus",
                    to: "/canceled-orders",
                },
            ],
        },
        {
            label: "Billing",
            items: [
                {
                    label: "Invoices",
                    icon: "pi pi-fw pi-money-bill",
                    to: "/invoices",
                },
                {
                    label: "Old Invoices",
                    icon: "pi pi-fw pi-money-bill",
                    to: "/old-invoices",
                    visible: user.role === "SUPER_ADMIN" ? true : false,
                },
            ],
        },
        {
            label: "LR",
            items: [
                { label: "LRs", icon: "pi pi-fw pi-receipt", to: "/lrs" },
                {
                    label: "Old LRs",
                    icon: "pi pi-fw pi-receipt",
                    to: "/old-lrs",
                    visible: user.role === "SUPER_ADMIN" ? true : false,
                },
            ],
        },
        {
            label: "Utilities",
            items: [
                {
                    label: "Legder",
                    icon: "pi pi-fw pi-address-book",
                    to: "/ledger",
                    visible: user.role === "SUPER_ADMIN" ? true : false,
                },
                {
                    label: "Outstandings",
                    icon: "pi pi-fw pi-briefcase",
                    to: "/outstandings",
                    visible: user.role === "SUPER_ADMIN" ? true : false,
                },
                {
                    label: "Users",
                    icon: "pi pi-fw pi-user",
                    to: "/users",
                    visible: user.role === "SUPER_ADMIN" ? true : false,
                },
                {
                    label: "Logout",
                    icon: "pi pi-fw pi-sign-out",
                    to: "/logout",
                },
            ],
        },
    ];

    return (
        <MenuProvider>
            {/* <Image
        aria-hidden
        src="/logo.svg"
        alt="Raftaar logo"
        style={{ width: "100%" }}
        width={100}
        height={100}
        className="mb-3"
      /> */}
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item.seperator ? (
                        <AppMenuitem
                            item={item}
                            root={true}
                            index={i}
                            key={item.label}
                        />
                    ) : (
                        <li className="menu-separator"></li>
                    );
                })}
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
