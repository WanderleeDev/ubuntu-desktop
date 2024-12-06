import {} from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
//  Material
import { MatSliderModule } from "@angular/material/slider";
import { MatDividerModule } from "@angular/material/divider";
import { AccordionComponent } from "../accordion/accordion.component";
//  Interfaces
import { IAccordionData } from "../../interfaces/IAccordionData.interface";
import { IBtnBasic } from "../../interfaces/IBtnData.interface";

@Component({
  selector: "app-sub-config-panel",
  standalone: true,
  imports: [MatSliderModule, MatDividerModule, AccordionComponent],
  templateUrl: "./subConfigPanel.component.html",
  styleUrls: ["./subConfigPanel.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubConfigPanelComponent {
  accordionData: Partial<IAccordionData>[] = [
    {
      title: "Red",
      titleIcon: "/assets/extra-icons/network-wired-offline-symbolic.svg",
      content: ["Apagar", "Configuración de red"],
    },
    {
      title: "Equilibrado",
      titleIcon: "/assets/extra-icons/desktop.svg",
      content: ["Rendimiento", "Equilibrado", "Ahorro de energía"],
      extraContent: "Configuración de energía",
    },
  ];

  secondAccordionData: Partial<IAccordionData> = {
    title: "Apagar / cerrar sesión",
    titleIcon: "/assets/extra-icons/control.svg",
    content: ["Suspender", "Reiniciar...", "Apagar..."],
    extraContent: "Cerrar sesión",
  };

  bottoms: IBtnBasic[] = [
    {
      label: "Configuración",
      urlSvg: "/assets/extra-icons/emblem-system-symbolic.svg",
    },
    {
      label: "Bloquear",
      urlSvg: "/assets/extra-icons/lock.svg",
    },
  ];
}
