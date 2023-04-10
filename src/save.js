import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	return (
		<div { ...useBlockProps.save() }>
			<figure className='partner-logo'>
        <img 
          src={ attributes.partnerLogo } />
      </figure>
		</div>
	);
}
