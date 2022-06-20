const { registerBlockType } = wp.blocks;
import {
  RichText,
  ColorPalette,
  InspectorControls,
  AlignmentToolbar,
  BlockControls,
} from "@wordpress/block-editor";


const { PanelBody, TextControl } = wp.components;



registerBlockType("custombtn/custom-btn", {
  //attributes

  title: "Custom Button",
  descriptions: "this is custom button",
  icon: "smiley",
  category: "layout",

  //custom attributes

  attributes: {
    text: {
      type: "string",
      selector: "div",
      default: " Add Text ...  ",
      source: "html",
    },
    textColor: {
      type: "string",
      default: "white ",
      source: "html",
    },
    bgColor: {
      type: "string",
      default: "red ",
      source: "html",
    },
    alignment: {
      type: "string",
      default: "none ",
    },
    url: {
      type: "url",
    },
  },

  //functions

  edit({ attributes, setAttributes }) {
    const { text, textColor, bgColor, alignment,url } = attributes;

    function updateText(newText) {
      setAttributes({ text: newText });
    }
    function onTextColorChange(newColor) {
      setAttributes({ textColor: newColor });
    }
    function onbgColorChange(newBgColor) {
      setAttributes({ bgColor: newBgColor });
    }
    function onUrlChange(newUrl) {
      setAttributes({ url: newUrl });
    }
    function onAlignmentChange(newAlignment) {
      setAttributes({
        alignment: newAlignment === undefined ? "none" : newAlignment,
      });
    }
   

    return [
      <InspectorControls style={{ margin: "40px," }}>
        <TextControl label="Button Text" value={text} onChange={updateText} />
      </InspectorControls>,


      <InspectorControls style={{ marginBottom: "40px" }}>
               <PanelBody title={" Font Color Settings"}>
          <p>
            <strong>Select a Title Color:</strong>
          </p>
          <ColorPalette value={textColor} onChange={onTextColorChange} />
        </PanelBody>
      </InspectorControls>,
      <InspectorControls style={{ marginBottom: "40px" }}>
        <PanelBody title={" background Color Settings"}>
          <p>
            <strong>Select a background Color:</strong>
          </p>
          <ColorPalette value={bgColor} onChange={onbgColorChange} />
        </PanelBody>

        <TextControl
          label="Enter Url Button"
          value={url}
          onChange={onUrlChange}
        />
      </InspectorControls>,
      <div className="cu-btn">
        {
          <BlockControls>
            <AlignmentToolbar value={alignment} onChange={onAlignmentChange} />
          </BlockControls>
        }
        <RichText
          key="editable"
          tagName="a"
          placeholder=" Add Text ..."
          value={text}
          onChange={updateText}
          href={url}
          style={{
            color: textColor,
            backgroundColor: bgColor,
            padding: "15px",
            borderRadius: "30px",
            textAlign: alignment,
          }}
        />
      </div>,
    ];
  },

  save({ attributes }) {
    const { text, textColor, bgColor, alignment,url } = attributes;

    return (
      <div className="cu-btn">
        <a
          style={{
            color: textColor,
            backgroundColor: bgColor,
            padding: "15px",
            borderRadius: "30px",
            textAlign: alignment,
          }}
          
          href={url}
        >
          {text}
        </a>
      </div>
    );
  },
});




