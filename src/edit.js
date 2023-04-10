import { __ } from '@wordpress/i18n';
import { useBlockProps, MediaPlaceholder, BlockIcon } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';
import './editor.scss';

export default function Edit( { attributes, setAttributes }) {

  const blockProps = useBlockProps();
  const postType = useSelect(
      ( select ) => select( 'core/editor' ).getCurrentPostType(),
      []
  );
  const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );
  
  const metaFieldValue = meta['partnerlogo'];

  const updateMetaValue = ( newValue ) => {
    setMeta( { ...meta, partnerlogo: newValue } );
  };



	return (
		<div { ...blockProps }>
      <MediaPlaceholder
        onSelect = {
            ( el ) => {
                setAttributes( { 
                    partnerLogo: el.url,
                } );
                updateMetaValue( el.url );
            }
        }
        accept="image/*"
        icon={<BlockIcon icon="format-image" />}
        allowedTypes = { [ 'image' ] }
        multiple = { false }
        labels = { { title: 'Partner Logo' } }
        mediaPreview={ <img className='previewimg' src={ metaFieldValue } /> }
      >
      </MediaPlaceholder>
		</div>
	);
}
