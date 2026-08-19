# Using Lyreline Studio with Lyreline

Lyreline and Lyreline Studio have distinct responsibilities.

## Lyreline owns authored source

Use Lyreline to capture workflows and maintain the canonical instructional
content: procedure structure, written instructions, screenshots, crops,
annotations, callouts, redactions, and selected regions.

## Lyreline Studio owns publication work

Use Lyreline Studio to manage Studio projects, prepare narration, retain
generated audio, review publication content, and create HTML, PDF, and video
outputs.

## Continuing between the apps

The handoff preserves the Studio project's identity so both apps can return to
the same logical project. It is an explicit continuation, not live
synchronization.

When Lyreline returns updated authored content, Studio identifies what changed.
For an existing section, Studio preserves its narration draft and generated
audio while presenting the updated Lyreline source for review. This prevents a
source edit from silently overwriting publication work.

Review the updated source, reconcile the narration where necessary, and mark the
review complete. Studio can then identify publication outputs that need to be
updated.

## Opening an existing identity

If a portable Studio package has the same project identity as a managed project,
Studio offers the established choices:

- **Open Existing** opens the matching managed project without importing the
  package as another copy.
- **Import as Copy** creates an independent project with its own identity while
  preserving its ancestry.
- **Cancel** makes no change.
