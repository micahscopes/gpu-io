import * as utils from './utils';
import { GPUComposer } from './GPUComposer';
import { GPULayer } from './GPULayer';
import { GPUProgram } from './GPUProgram';
import { GPUIndexBuffer } from './GPUIndexBuffer';
import * as Programs from './Programs';
/**
 * @private
 */
declare const _testing: {
    intForPrecision(precision: import("./constants").GLSLPrecision): 2 | 1 | 0;
    uniformTypeForType(type: import("./constants").GPULayerType, glslVersion: import("./constants").GLSLVersion): "FLOAT" | "INT" | "UINT";
    arrayConstructorForType(type: import("./constants").GPULayerType, halfFloatsAsFloats?: boolean): Float32ArrayConstructor | Uint16ArrayConstructor | Uint8ArrayConstructor | Int8ArrayConstructor | Int16ArrayConstructor | Uint32ArrayConstructor | Int32ArrayConstructor;
    glslTypeForType(type: import("./constants").GPULayerType, numComponents: import("./constants").GPULayerNumComponents): string;
    glslPrefixForType(type: import("./constants").GPULayerType): "" | "u" | "i";
    glslComponentSelectionForNumComponents(numComponents: import("./constants").GPULayerNumComponents): "" | ".x" | ".xy" | ".xyz";
    texturePolyfill(shaderSource: string): {
        shaderSource: string;
        samplerUniforms: string[];
    };
    GLSL1Polyfills(shaderSource: string): string;
    fragmentShaderPolyfills(shaderSource: string, glslVersion: import("./constants").GLSLVersion): string;
    SAMPLER2D_WRAP_X: "GPUIO_WRAP_X";
    SAMPLER2D_WRAP_Y: "GPUIO_WRAP_Y";
    SAMPLER2D_CAST_INT: "GPUIO_CAST_INT";
    SAMPLER2D_FILTER: "GPUIO_FILTER";
    SAMPLER2D_HALF_PX_UNIFORM: "u_gpuio_half_px";
    SAMPLER2D_DIMENSIONS_UNIFORM: "u_gpuio_dimensions";
    shouldCastIntTypeAsFloat(composer: GPUComposer, type: import("./constants").GPULayerType): boolean;
    testWriteSupport(composer: GPUComposer, internalType: import("./constants").GPULayerType): boolean;
    testFilterWrap(composer: GPUComposer, internalType: import("./constants").GPULayerType, filter: import("./constants").GPULayerFilter, wrap: import("./constants").GPULayerWrap): boolean;
    minMaxValuesForType(type: import("./constants").GPULayerType): {
        min: number;
        max: number;
    };
    isValidDataType(type: string): boolean;
    isValidFilter(type: string): boolean;
    isValidWrap(type: string): boolean;
    isValidImageFormat(type: string): boolean;
    isValidImageType(type: string): boolean;
    isValidClearValue(clearValue: number | number[], numComponents: number, type: import("./constants").GPULayerType): boolean;
    isNumberOfType(value: any, type: import("./constants").GPULayerType): boolean;
    checkValidKeys(keys: string[], validKeys: string[], methodName: string, name?: string | undefined): void;
    checkRequiredKeys(keys: string[], requiredKeys: string[], methodName: string, name?: string | undefined): void;
    glsl1VertexIn(shaderSource: string): string;
    castVaryingToFloat(shaderSource: string): string;
    glsl1VertexOut(shaderSource: string): string;
    glsl1FragmentIn(shaderSource: string): string;
    getFragmentOuts(shaderSource: string, programName: string): {
        name: string;
        type: "float" | "uint" | "int" | "vec2" | "vec3" | "vec4" | "ivec2" | "ivec3" | "ivec4" | "uvec2" | "uvec3" | "uvec4";
    }[];
    glsl1FragmentOut(shaderSource: string, programName: string): string[];
    checkFragmentShaderForFragColor(shaderSource: string, glslVersion: import("./constants").GLSLVersion, name: string): void;
    glsl1Texture(shaderSource: string): string;
    glsl1Sampler2D(shaderSource: string): string;
    glsl1Uint(shaderSource: string): string;
    highpToMediump(shaderSource: string): string;
    stripVersion(shaderSource: string): string;
    stripPrecision(shaderSource: string): string;
    stripComments(shaderSource: string): string;
    getSampler2DsInProgram(shaderSource: string): string[];
    getExtension(composer: GPUComposer, extensionName: string, optional?: boolean): any;
    OES_TEXTURE_FLOAT: "OES_texture_float";
    OES_TEXTURE_HALF_FLOAT: "OES_texture_half_float";
    OES_TEXTURE_FLOAT_LINEAR: "OES_texture_float_linear";
    OES_TEXTURE_HAlF_FLOAT_LINEAR: "OES_texture_half_float_linear";
    WEBGL_DEPTH_TEXTURE: "WEBGL_depth_texture";
    EXT_COLOR_BUFFER_FLOAT: "EXT_color_buffer_float";
    EXT_COLOR_BUFFER_HALF_FLOAT: "EXT_color_buffer_half_float";
    OES_VERTEX_ARRAY_OBJECT: "OES_vertex_array_object";
    OES_ELEMENT_INDEX_UINT: "OES_element_index_uint";
    OES_STANDARD_DERIVATIVES: "OES_standard_derivatives";
    isFloatType: typeof utils.isFloatType;
    isUnsignedIntType: typeof utils.isUnsignedIntType;
    isSignedIntType: typeof utils.isSignedIntType;
    isIntType: typeof utils.isIntType;
    makeShaderHeader: typeof utils.makeShaderHeader;
    compileShader: typeof utils.compileShader;
    initGLProgram: typeof utils.initGLProgram;
    readyToRead: typeof utils.readyToRead;
    preprocessVertexShader: typeof utils.preprocessVertexShader;
    preprocessFragmentShader: typeof utils.preprocessFragmentShader;
    isPowerOf2: typeof utils.isPowerOf2;
    initSequentialFloatArray: typeof utils.initSequentialFloatArray;
    uniformInternalTypeForValue: typeof utils.uniformInternalTypeForValue;
    indexOfLayerInArray: typeof utils.indexOfLayerInArray;
    readPixelsAsync: typeof utils.readPixelsAsync;
    readPixelsToWebGLBuffer: typeof utils.readPixelsToWebGLBuffer;
    readPixelsToMultipleWebGLBuffers: typeof utils.readPixelsToMultipleWebGLBuffers;
};
declare const isWebGL2: typeof utils.isWebGL2, isWebGL2Supported: typeof utils.isWebGL2Supported, isHighpSupportedInVertexShader: typeof utils.isHighpSupportedInVertexShader, isHighpSupportedInFragmentShader: typeof utils.isHighpSupportedInFragmentShader, getVertexShaderMediumpPrecision: typeof utils.getVertexShaderMediumpPrecision, getFragmentShaderMediumpPrecision: typeof utils.getFragmentShaderMediumpPrecision;
declare const copyProgram: typeof Programs.copyProgram, addLayersProgram: typeof Programs.addLayersProgram, addValueProgram: typeof Programs.addValueProgram, multiplyValueProgram: typeof Programs.multiplyValueProgram, setValueProgram: typeof Programs.setValueProgram, setColorProgram: typeof Programs.setColorProgram, zeroProgram: typeof Programs.zeroProgram, renderRGBProgram: typeof Programs.renderRGBProgram, renderAmplitudeProgram: typeof Programs.renderAmplitudeProgram, renderSignedAmplitudeProgram: typeof Programs.renderSignedAmplitudeProgram;
export { GPUComposer, GPULayer, GPUProgram, GPUIndexBuffer, isWebGL2, isWebGL2Supported, isHighpSupportedInVertexShader, isHighpSupportedInFragmentShader, getVertexShaderMediumpPrecision, getFragmentShaderMediumpPrecision, copyProgram, addLayersProgram, addValueProgram, multiplyValueProgram, renderAmplitudeProgram, renderSignedAmplitudeProgram, setValueProgram, setColorProgram, zeroProgram, renderRGBProgram, _testing, };
export * from './constants';
