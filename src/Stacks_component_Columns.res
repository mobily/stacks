open ReactNative

open Stacks_types
open Stacks_hooks
open Stacks_utils

module Context = {
  type t = {isCollapsed: bool, space: float, debugStyle: option<Style.t>}

  let context = React.createContext({isCollapsed: false, space: 0., debugStyle: None})
  let useColumns = () => React.useContext(context)

  module Provider = {
    let make = React.Context.provider(context)
    let makeProps = (~value, ~children, ()) =>
      {
        "value": value,
        "children": children,
      }
  }
}

@react.component
let make = (
  // Columns props
  ~space=?,
  ~reverse=?,
  ~alignX=?,
  ~alignY=?,
  ~collapseBelow=?,
  // View props
  // ~accessibilityActions=?,
  ~accessibilityComponentType=?,
  ~accessibilityElementsHidden=?,
  ~accessibilityHint=?,
  ~accessibilityIgnoresInvertColors=?,
  ~accessibilityLabel=?,
  ~accessibilityLiveRegion=?,
  ~accessibilityRole=?,
  ~accessibilityState=?,
  ~accessibilityTraits=?,
  ~accessibilityValue=?,
  ~accessibilityViewIsModal=?,
  ~accessible=?,
  ~collapsable=?,
  ~hitSlop=?,
  ~importantForAccessibility=?,
  ~nativeID=?,
  ~needsOffscreenAlphaCompositing=?,
  ~onAccessibilityEscape=?,
  ~onAccessibilityTap=?,
  ~onLayout=?,
  ~onMagicTap=?,
  ~onMoveShouldSetResponder=?,
  ~onMoveShouldSetResponderCapture=?,
  ~onResponderEnd=?,
  ~onResponderGrant=?,
  ~onResponderMove=?,
  ~onResponderReject=?,
  ~onResponderRelease=?,
  ~onResponderStart=?,
  ~onResponderTerminate=?,
  ~onResponderTerminationRequest=?,
  ~onStartShouldSetResponder=?,
  ~onStartShouldSetResponderCapture=?,
  ~pointerEvents=?,
  ~removeClippedSubviews=?,
  ~renderToHardwareTextureAndroid=?,
  ~shouldRasterizeIOS=?,
  ~style=?,
  ~testID=?,
  ~children,
  // React Native Web props
  ~onMouseDown=?,
  ~onMouseEnter=?,
  ~onMouseLeave=?,
  ~onMouseMove=?,
  ~onMouseOver=?,
  ~onMouseOut=?,
  ~onMouseUp=?,
) => {
  let currentBreakpoint = useCurrentBreakpoint()
  let (space, alignX, alignY) = useResponsiveProp3(space, alignX, alignY)
  let space = useSpacing(space)
  let debugStyle = useDebugStyle()
  let {isCollapsed, direction} = resolveCollapsibleProps(
    ~collapseBelow,
    ~reverse,
    ~currentBreakpoint,
  )
  let negativeSpace = -.space
  let style = Style.arrayOption([Some(styles["fullWidth"]), style])
  let containerStyle = {
    let arr = isCollapsed
      ? [Some(styles["fullWidth"]), Some(marginTop(. negativeSpace))]
      : [
          resolveJustifyContentX(alignX),
          resolveAlignItemsY(alignY),
          Some(marginLeft(. negativeSpace)),
        ]

    Style.arrayOption(Belt.Array.concat(arr, [resolveDirection(Some(direction))]))
  }
  let config: Context.t = {isCollapsed: isCollapsed, space: space, debugStyle: debugStyle}

  <Context.Provider value={config}>
    <View
      ?accessibilityComponentType
      ?accessibilityElementsHidden
      ?accessibilityHint
      ?accessibilityIgnoresInvertColors
      ?accessibilityLabel
      ?accessibilityLiveRegion
      ?accessibilityRole
      ?accessibilityState
      ?accessibilityTraits
      ?accessibilityValue
      ?accessibilityViewIsModal
      ?accessible
      ?collapsable
      ?hitSlop
      ?importantForAccessibility
      ?nativeID
      ?needsOffscreenAlphaCompositing
      ?onAccessibilityEscape
      ?onAccessibilityTap
      ?onLayout
      ?onMagicTap
      ?onMoveShouldSetResponder
      ?onMoveShouldSetResponderCapture
      ?onResponderEnd
      ?onResponderGrant
      ?onResponderMove
      ?onResponderReject
      ?onResponderRelease
      ?onResponderStart
      ?onResponderTerminate
      ?onResponderTerminationRequest
      ?onStartShouldSetResponder
      ?onStartShouldSetResponderCapture
      ?pointerEvents
      ?removeClippedSubviews
      ?renderToHardwareTextureAndroid
      ?shouldRasterizeIOS
      ?testID
      ?onMouseDown
      ?onMouseEnter
      ?onMouseLeave
      ?onMouseMove
      ?onMouseOver
      ?onMouseOut
      ?onMouseUp
      style>
      <View style=containerStyle> children </View>
    </View>
  </Context.Provider>
}
