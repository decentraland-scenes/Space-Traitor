import { Animator, Entity, PBAnimationState, PBAnimator } from '@dcl/sdk/ecs'

function getClipAndAnimator(entity: Entity, clipName: String): [PBAnimator, PBAnimationState] | [null, null] | [PBAnimator, null]{
    const anim = Animator.getMutableOrNull(entity);
    if (!anim)
        return [null, null];
    const state = anim.states.find((item) => item.clip === clipName);
    if (!state)
        return [anim, null];
    return [anim, state];
}

export function playSingleAnimation(entity: Entity, clipName: String, shouldReset = true, speed: number = 1.0): Boolean {
    const [animator, state] = getClipAndAnimator(entity, clipName);
    if (!animator || !state)
        return false;
    // Reset all other animations
    for (const state of animator.states) {
        state.playing = false;
        state.shouldReset = true;
    }
    state.playing = true;
    state.shouldReset = shouldReset;
    state.speed = speed
    return true;
}
