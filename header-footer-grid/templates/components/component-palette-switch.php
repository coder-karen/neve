<?php
/**
 * Template used for component rendering wrapper.
 *
 * Name:    Header Footer Grid
 *
 * @version 1.0.0
 * @package HFG
 */
namespace HFG;

use HFG\Core\Components\PaletteSwitch;

$icon_type = component_setting( PaletteSwitch::TOGGLE_ICON_ID );
$svg_icon  = PaletteSwitch::get_icon( $icon_type );
$label     = component_setting( PaletteSwitch::PLACEHOLDER_ID );
?>
<div class="toggle-palette">
	<a href="<?php echo '#'; ?>" class="toggle palette-icon-wrapper">
		<span class="icon"><?php	echo $svg_icon; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></span>
		<?php if ( $label !== '' ) { ?>
			<span class="label"><?php echo esc_attr( $label ); ?></span>
		<?php } ?>
	</a>
</div>
