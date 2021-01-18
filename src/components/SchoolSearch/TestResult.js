import WithSearchRenderProps from '@elastic/react-search-ui/lib/WithSearchRenderProps';
import React from 'react';
import { isFieldValueWrapper } from "./FieldValueWrapper.js";


function getFieldType(result, field, type) {
    if (result[field]) return result[field][type];
  }
  
  function getRaw(result, field) {
    return getFieldType(result, field, "raw");
  }
  
  function getSnippet(result, field) {
    return getFieldType(result, field, "snippet");
  }
  
  function htmlEscape(str) {
    if (!str) return "";
  
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
  
  function getEscapedField(result, field) {
    // Fallback to raw values here, because non-string fields
    // will not have a snippet fallback. Raw values MUST be html escaped.
    const safeField =
      getSnippet(result, field) || htmlEscape(getRaw(result, field));
    return Array.isArray(safeField) ? safeField.join(", ") : safeField;
  }
  
  function getEscapedFields(result) {
    return Object.keys(result).reduce((acc, field) => {
      // If we receive an arbitrary value from the response, we may not properly
      // handle it, so we should filter out arbitrary values here.
      //
      // I.e.,
      // Arbitrary value: "_metaField: '1939191'"
      // vs.
      // FieldValueWrapper: "_metaField: {raw: '1939191'}"
      if (!isFieldValueWrapper(result[field])) return acc;
      return { ...acc, [field]: getEscapedField(result, field) };
    }, {});
  }

export default function testResult(props)
{
    const fields = getEscapedFields(props.result);
    const title = getEscapedField(props.result, props.titleField);
    return(
    <div style={{ marginTop: "10px", marginBottom: "10px" }}>
        <img style={{marginRight: "15px"}} width="100"  height="100" src={"/img/" + fields["imageurl"]}/>
         <a style={{color: "black"}} href={fields["page"]}>{fields["name"]}</a>
    
    
    </div>)
}