import {
  defineComponents,
  defineDesignTokens,
} from "@contentful/experiences-sdk-react";
import StudioConfig from "../../studio.config";
import { SiteButtonDefinition, SiteButtonComponent } from "@studio/SiteButton";
import { ArSaDefinition, ArsaComponent } from "@studio/ArSa";
import {
  ExternalVideoComponent,
  ExternalVideoDefinition,
} from "@studio/ExternalVideo";

import { UselessComponent, UselessDefinition } from "@studio/Useless";
import { ColorPickerCustom, ColorPickerDefinition } from "@studio/ColorPicker";


defineComponents([
  {
    component: SiteButtonComponent,
    definition: SiteButtonDefinition,
    options: {
      wrapComponent: false,
    },
  },
  {
    component: ExternalVideoComponent,
    definition: ExternalVideoDefinition,
  },
  {
    component: ArsaComponent,
    definition: ArSaDefinition,
  },
  {
    component: UselessComponent,
    definition: UselessDefinition,
  },
  {
    component: ColorPickerCustom,
    definition: ColorPickerDefinition,
  }
  /*
   * After a new folder is created in '/_components' you need to register it below in a JSON format
   */
]);

/*
 * Primary colors are defined in the studio.config.js file, because we feed these to the EB design tokens, and tailwind!
 */
defineDesignTokens({
  color: {
    Primary: StudioConfig.colors.primary["400"],
  },
});
