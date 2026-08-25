# Using Lyreline Studio with Lyreline

Lyreline and Lyreline Studio have distinct responsibilities.

## Lyreline owns authored source

Use Lyreline to capture workflows and maintain the canonical instructional
content: procedure structure, written instructions, screenshots, crops,
annotations, callouts, redactions, and selected regions.

## Lyreline Studio owns publication work

Use Lyreline Studio to manage Studio projects, continue composition, prepare
narration, retain generated audio, review publication content, and create HTML,
PDF, and video outputs.

## Supported round-trip workflow

The handoff preserves the Studio project's identity so both apps can return to
the same logical project. It is an explicit continuation, not live
synchronization.

1. **Capture and author in Lyreline.** Create the procedure structure,
   instructions, screenshots, and presentation edits.
2. **Continue in Lyreline Studio.** Open the authored procedure in Studio for
   further composition, narration, review, and publication.
3. **Review updates in Studio.** Reconcile changed authored source with existing
   narration and publication work.
4. **Optionally return to Lyreline.** Export or hand off the Studio-authored
   project and open it in Lyreline. Studio-authored sections become native,
   editable Procedure steps.

Supported round trips preserve:

- section order and instructional text;
- images and presentation edits;
- numbered callouts and optional labels; and
- the relationship between a numbered callout and its instruction.

For callout creation and editing instructions, see
[Numbered Callouts in the Lyreline documentation](https://94972cptbv-tech.github.io/Lyreline-Documentation/numbered-callouts/).

## Reviewing source updates in Studio

When Lyreline returns updated authored content, Studio identifies what changed.
For an existing section, Studio preserves its narration draft and generated
audio while presenting the updated Lyreline source for review. This prevents a
source edit from silently overwriting publication work.

Review the updated source, reconcile the narration where necessary, and mark the
review complete. Studio can then identify publication outputs that need to be
updated.

## Capture history remains in Lyreline

Studio works with authored procedure content and presentation data. It does not
fabricate Capture Moments or rewrite Capture Sessions. Historical capture
provenance remains separate from content composed later in Studio.

Returning Studio-authored content therefore adds or restores authored Procedure
steps without pretending that Studio composition was a new capture event.

## Reopening Studio-authored work in Lyreline

When a matching Lyreline procedure is an eligible empty shell, returning
Studio-authored sections can rehydrate that shell while retaining its established
procedure relationship.

If the matching Lyreline procedure already contains steps or sections, Lyreline
protects that populated procedure from silent replacement. Existing authored
content is not overwritten merely because a Studio package has the same project
identity.

## Opening an existing identity

If a portable Studio package has the same project identity as a managed project,
Studio offers the established choices:

- **Open Existing** opens the matching managed project without importing the
  package as another copy.
- **Import as Copy** creates an independent project with its own identity while
  preserving its ancestry.
- **Cancel** makes no change.
